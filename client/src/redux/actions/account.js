const jwtDecode = require("jwt-decode");
const BASE_URL = "http://localhost:3000/api/v1";
const TOKEN = window.localStorage.getItem("token");
const DECODED_TOKEN = jwtDecode(TOKEN);

// GET /users/:id
export function getLoggedUser(dispatch) {
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
        return Promise.reject("");
      } else {
        return Promise.reject("Unexpected error");
      }
    })
    .then(data => {
      dispatch({
        type: "APP_GET_CURRENT_USER_SUCCEED",
        payload: {
          user: data
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
