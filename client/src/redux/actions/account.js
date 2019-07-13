const jwtDecode = require("jwt-decode");
const BASE_URL = "http://localhost:3000/api/v1";

// ---------------
// GET /users/:id
// ---------------
export function getLoggedUser(dispatch) {
  const TOKEN = window.localStorage.getItem("token");
  const DECODED_TOKEN = TOKEN ? jwtDecode(TOKEN) : "";

  fetch(BASE_URL + "/users?_id=" + DECODED_TOKEN.id, {
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
      } else if (response.status === 401) {
        return Promise.reject(response.json());
      } else {
        return Promise.reject("Unexpected error");
      }
    })
    .then(data => {
      delete data[0].password;
      dispatch({
        type: "APP_GET_CURRENT_USER_SUCCEED",
        payload: {
          user: data[0]
        }
      });
    })
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

// ---------------
// PUT /users/:id
// ---------------
export function updateLoggedUser(user, dispatch) {
  const TOKEN = window.localStorage.getItem("token");
  const DECODED_TOKEN = TOKEN ? jwtDecode(TOKEN) : "";
  
  fetch(BASE_URL + "/users", {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + TOKEN,
      "Content-Type": "application/json"
    },
    mode: "cors",
    body: JSON.stringify({ ...user, id: DECODED_TOKEN.id })
  })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        return new Promise("error");
      }
    })
    .then(data => {
      dispatch({
        type: "APP_PUT_CURRENT_USER_SUCCEED",
        payload: {
          response: data,
          user: user
        }
      });
    })
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

// RESET CURRENT USER
export function resetCurrentUser() {
  return {
    type: "APP_ACCOUNT_RESET"
  };
}
