const jwtDecoder = require("jwt-decode");
const BASE_URL = "http://localhost:3000/api/v1";

// ---- POST /posts ----
export function postAPost(post, dispatch) {
  const TOKEN = window.localStorage.getItem("token");
  const DECODED_TOKEN = TOKEN ? jwtDecoder(TOKEN) : "";

  fetch(BASE_URL + "/posts", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + TOKEN,
      "Content-Type": "application/json"
    },
    mode: "cors",
    body: JSON.stringify({ ...post, user: { id: DECODED_TOKEN.id } })
  })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        return response.json();
      }
    })
    .then(data => {
      dispatch({
        type: "APP_POST_NEW_POST_SUCCEED",
        payload: {
          post: data.post,
          status: "Published !"
        }
      });
    })
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

  return {
    type: "APP_POST_NEW_POST_REQUESTED"
  };
}

// ---- reset status ----
export function resetStatus() {
  return {
    type: "APP_POST_STATUS_NEW_POST_RESET"
  };
}

// ---- GET /posts/all -----
export function getAllPosts(dispatch) {
  const TOKEN = window.localStorage.getItem("token");

  fetch(BASE_URL + "/posts/all", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + TOKEN,
      "Content-Type": "application/json"
    },
    mode: "cors"
  })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        return response.json();
      }
    })
    .then(data => {
      dispatch({
        type: "APP_GET_ALL_POST_SUCCEED",
        payload: {
          posts: data,
          status: "Retrieving succeed."
        }
      });
    })
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

  return {
    type: "APP_GET_ALL_POST_REQUESTED"
  };
}

// ---- GET /posts/all?_id=:id -----
export function getOnePost(postId, dispatch) {
  const TOKEN = window.localStorage.getItem("token");

  fetch(BASE_URL + "/posts/all?_id=" + postId, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + TOKEN,
      "Content-Type": "application/json"
    },
    mode: "cors"
  })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        return response.json();
      }
    })
    .then(data => {
      dispatch({
        type: "APP_GET_ONE_POST_SUCCEED",
        payload: {
          post: data[0],
          status: "Retrieving succeed."
        }
      });
    })
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

  return {
    type: "APP_GET_ONE_POST_REQUESTED"
  };
}

// PUT /posts/like
export function likeAPost(post, dispatch) {
  const TOKEN = window.localStorage.getItem("token");

  fetch(BASE_URL + "/posts/like", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + TOKEN,
      "Content-Type": "application/json"
    },
    mode: "cors",
    body: JSON.stringify({ _id: post._id })
  })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        return new Promise("Erreur");
      }
    })
    .then(data => {
      dispatch({
        type: "APP_PUT_LIKE_POST_SUCCEED"
      });
    })
    .catch(e => {
      console.error(e);
      dispatch({
        type: "APP_PUT_LIKE_POST_FAILED"
      });
    });

  return {
    type: "APP_PUT_LIKE_POST_REQUESTED"
  };
}

// PUT /posts/like
export function unlikeAPost(post, dispatch) {
  const TOKEN = window.localStorage.getItem("token");

  fetch(BASE_URL + "/posts/unlike", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + TOKEN,
      "Content-Type": "application/json"
    },
    mode: "cors",
    body: JSON.stringify({ _id: post._id })
  })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        return new Promise("Erreur");
      }
    })
    .then(data => {
      dispatch({
        type: "APP_REMOVE_LIKE_POST_SUCCEED"
      });
    })
    .catch(e => {
      console.error(e);
      dispatch({
        type: "APP_REMOVE_LIKE_POST_FAILED"
      });
    });

  return {
    type: "APP_REMOVE_LIKE_POST_REQUESTED"
  };
}
