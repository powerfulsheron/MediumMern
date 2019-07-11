const BASE_URL = "http://localhost:3000/api/v1";

// GET /types
export function getAllTypes(dispatch) {
  const TOKEN = window.localStorage.getItem("token");

  fetch(BASE_URL + "/types", {
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
        type: "APP_GET_ALL_TYPE_SUCCEED",
        payload: {
          types: data,
          status: "Retrieving succeed."
        }
      });
    })
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

  return {
    type: "APP_GET_ALL_TYPE_REQUESTED"
  };
}
