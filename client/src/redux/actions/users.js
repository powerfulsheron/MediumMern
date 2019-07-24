const BASE_URL = "http://localhost:3000/api/v1";

// ---- GET /users?_id=:id -----
export function getOneUser(userId, dispatch) {
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
  fetch(BASE_URL + "/users?_id=" + userId, options)
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
        type: "APP_GET_ONE_USER_SUCCEED",
        payload: {
          user: data[0],
          status: "Retrieving succeed."
        }
      });
    })

    // Error
    .catch(e => {
      console.error(e);
      dispatch({
        type: "APP_GET_ONE_USER_FAILED",
        payload: {
          err: e.error ? e.error : e,
          status: "Retrieving failed."
        }
      });
    });

  // Requested
  return {
    type: "APP_GET_ONE_USER_REQUESTED"
  };
}