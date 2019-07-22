const BASE_URL = "http://localhost:3000/api/v1";

// GET /types
export function getAllTypes(dispatch) {
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
  fetch(BASE_URL + "/types", options)
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
        type: "APP_GET_ALL_TYPE_SUCCEED",
        payload: {
          types: data,
          status: "Retrieving succeed."
        }
      });
    })

    // Error
    .catch(e => {
      console.error(e);
      dispatch({
        type: "APP_GET_ALL_TYPE_FAILED",
        payload: {
          err: e.error ? e.error : e,
          status: "Retrieving failed."
        }
      });
    });

  // Requested
  return {
    type: "APP_GET_ALL_TYPE_REQUESTED"
  };
}
