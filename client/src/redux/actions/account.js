const jwtDecode = require("jwt-decode");
const BASE_URL = "http://localhost:3000/api/v1";

// GET /users/:id
export function getLoggedUser(dispatch) {
  const TOKEN = window.localStorage.getItem("token");
  const DECODED_TOKEN = TOKEN ? jwtDecode(TOKEN) : "";

  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + TOKEN,
      "Content-Type": "application/json"
    },
    mode: "cors"
  };

  // Call API
  fetch(BASE_URL + "/users?_id=" + DECODED_TOKEN.id, options)
    .then(response => {
      switch (response.status) {
        case 200:
          return response.json();
        case 404:
          return Promise.reject("User not found");
        default:
          return Promise.reject("Server error");
      }
    })

    // Success
    .then(data => {
      delete data[0].password;
      dispatch({
        type: "APP_GET_CURRENT_USER_SUCCEED",
        payload: {
          user: data[0]
        }
      });
    })

    // Error
    .catch(e => {
      console.error(e);
      dispatch({
        type: "APP_GET_CURRENT_USER_FAILED",
        payload: {
          err: e.error ? e.error : e
        }
      });
    });

  return {
    type: "APP_GET_CURRENT_USER_REQUESTED"
  };
}

// PUT /users/:id
export function updateLoggedUser(user, dispatch) {
  const TOKEN = window.localStorage.getItem("token");
  const DECODED_TOKEN = TOKEN ? jwtDecode(TOKEN) : "";

  const options = {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + TOKEN,
      "Content-Type": "application/json"
    },
    mode: "cors",
    body: JSON.stringify({ ...user, id: DECODED_TOKEN.id })
  };

  fetch(BASE_URL + "/users", options)
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
        type: "APP_PUT_CURRENT_USER_SUCCEED",
        payload: {
          user: user
        }
      });
    })

    // Error
    .catch(e => {
      dispatch({
        type: "APP_PUT_CURRENT_USER_FAILED",
        payload: {
          err: e.error ? e.error : e
        }
      });
    });

  return {
    type: "APP_PUT_CURRENT_USER_REQUESTED"
  };
}
