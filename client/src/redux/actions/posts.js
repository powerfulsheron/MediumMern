const jwtDecoder = require("jwt-decode");
const BASE_URL = "http://localhost:3000/api/v1";

// POST /posts
export function postAPost(post, dispatch) {
  const TOKEN = window.localStorage.getItem("token");
  const DECODED_TOKEN = TOKEN ? jwtDecoder(TOKEN) : "";

  const options = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + TOKEN,
      "Content-Type": "application/json"
    },
    mode: "cors",
    body: JSON.stringify({ ...post, user: { id: DECODED_TOKEN.id } })
  };

  // Call API
  fetch(BASE_URL + "/posts", options)
    .then(response => {
      switch (response.status) {
        case 201:
          return response.json();
        case 400:
          return Promise.reject("Bad request");
        default:
          return Promise.reject("Server error");
      }
    })

    // Success
    .then(data => {
      dispatch({
        type: "APP_POST_NEW_POST_SUCCEED",
        payload: {
          post: data.post,
          status: "Published !"
        }
      });
    })

    // Error
    .catch(e => {
      console.error(e);
      dispatch({
        type: "APP_POST_NEW_POST_FAILED",
        payload: {
          err: e.error ? e.error : e,
          status: "Error during the save of the post"
        }
      });
    });

  // Requested
  return {
    type: "APP_POST_NEW_POST_REQUESTED"
  };
}

// GET /posts/all
export function getAllPosts(dispatch) {
  const TOKEN = window.localStorage.getItem("token");

  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + TOKEN,
      "Content-Type": "application/json"
    },
    mode: "cors"
  };

  // Call API
  fetch(BASE_URL + "/posts/all", options)
    .then(response => {
      switch (response.status) {
        case 200:
          return response.json();
        case 400:
          return Promise.reject("Bad request");
        default:
          return Promise.reject("Server error");
      }
    })

    // Success
    .then(data => {
      dispatch({
        type: "APP_GET_ALL_POST_SUCCEED",
        payload: {
          posts: data,
          status: "Retrieving succeed."
        }
      });
    })

    // Error
    .catch(e => {
      console.error(e);
      dispatch({
        type: "APP_GET_ALL_POST_FAILED",
        payload: {
          err: e.error ? e.error : e,
          status: "Retrieving failed."
        }
      });
    });

  // Requested
  return {
    type: "APP_GET_ALL_POST_REQUESTED"
  };
}

// ---- GET /posts/all?_id=:id -----
export function getOnePost(postId, dispatch) {
  const TOKEN = window.localStorage.getItem("token");

  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + TOKEN,
      "Content-Type": "application/json"
    },
    mode: "cors"
  };

  // Call API
  fetch(BASE_URL + "/posts/all?_id=" + postId, options)
    .then(response => {
      switch (response.status) {
        case 200:
          return response.json();
        case 400:
          return Promise.reject("Bad request");
        case 404:
          return Promise.reject("User not found");
        default:
          return Promise.reject("Server error");
      }
    })

    // Success
    .then(data => {
      dispatch({
        type: "APP_GET_ONE_POST_SUCCEED",
        payload: {
          post: data[0],
          status: "Retrieving succeed."
        }
      });
    })

    // Error
    .catch(e => {
      console.error(e);
      dispatch({
        type: "APP_GET_ONE_POST_FAILED",
        payload: {
          err: e.error ? e.error : e,
          status: "Retrieving failed."
        }
      });
    });

  // Requested
  return {
    type: "APP_GET_ONE_POST_REQUESTED"
  };
}

// PUT /posts/like
export function likeAPost(post, dispatch) {
  const TOKEN = window.localStorage.getItem("token");

  const options = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + TOKEN,
      "Content-Type": "application/json"
    },
    mode: "cors",
    body: JSON.stringify({ _id: post._id })
  };

  // Call API
  fetch(BASE_URL + "/posts/like", options)
    .then(response => {
      switch (response.status) {
        case 200:
          return response.json();
        case 400:
          return Promise.reject("Bad request");
        case 404:
          return Promise.reject("User not found");
        default:
          return Promise.reject("Server error");
      }
    })

    // Success
    .then(data => {
      dispatch({
        type: "APP_PUT_LIKE_POST_SUCCEED"
      });
    })

    // Error
    .catch(e => {
      console.error(e);
      dispatch({
        type: "APP_PUT_LIKE_POST_FAILED"
      });
    });

  // Requested
  return {
    type: "APP_PUT_LIKE_POST_REQUESTED"
  };
}

// PUT /posts/unlike
export function unlikeAPost(post, dispatch) {
  const TOKEN = window.localStorage.getItem("token");

  const options = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + TOKEN,
      "Content-Type": "application/json"
    },
    mode: "cors",
    body: JSON.stringify({ _id: post._id })
  };

  // Call API
  fetch(BASE_URL + "/posts/unlike", options)
    .then(response => {
      switch (response.status) {
        case 200:
          return response.json();
        case 400:
          return Promise.reject("Bad request");
        case 404:
          return Promise.reject("User not found");
        default:
          return Promise.reject("Server error");
      }
    })

    // Success
    .then(data => {
      dispatch({
        type: "APP_REMOVE_LIKE_POST_SUCCEED"
      });
    })

    // Error
    .catch(e => {
      console.error(e);
      dispatch({
        type: "APP_REMOVE_LIKE_POST_FAILED"
      });
    });

  // Requested
  return {
    type: "APP_REMOVE_LIKE_POST_REQUESTED"
  };
}

// DELETE /posts
export function removeAPost(postID, dispatch) {
  const TOKEN = window.localStorage.getItem("token");

  const options = {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + TOKEN,
      "Content-Type": "application/json"
    },
    mode: "cors"
  };

  // Call API
  fetch(BASE_URL + "/posts?_id=" + postID, options)
    .then(response => {
      switch (response.status) {
        case 204:
          return Promise.resolve("Suppressed successfully");
        case 400:
          return Promise.reject("Bad request");
        case 404:
          return Promise.reject("User not found");
        default:
          return Promise.reject("Server error");
      }
    })

    // Success
    .then(data => {
      dispatch({
        type: "APP_REMOVE_POST_SUCCEED"
      });
    })

    // Error
    .catch(e => {
      dispatch({
        type: "APP_REMOVE_POST_FAILED"
      });
    });

  // Requested
  return {
    type: "APP_REMOVE_POST_REQUESTED"
  };
}
