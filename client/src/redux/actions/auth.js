const BASE_URL = "http://localhost:3000";

// POST /login
export function appLogin(email, password, dispatch) {
  var options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    mode: "cors",
    body: JSON.stringify({
      email: email,
      password: password
    })
  };

  // Call API
  fetch(BASE_URL + "/login", options)
    .then(response => {
      switch (response.status) {
        case 201:
          return response.json();
        case 400:
          return Promise.reject("Bad credentials");
        default:
          return Promise.reject("Server error");
      }
    })

    // Success
    .then(data => {
      window.localStorage.setItem("token", data.token);
      dispatch({
        type: "APP_LOGIN_SUCCEED",
        payload: {
          token: data.token
        }
      });
    })

    // Error
    .catch(e => {
      dispatch({
        type: "APP_LOGIN_FAILED",
        payload: {
          err: e.error ? e.error : e
        }
      });
    });

  // Requested
  return {
    type: "APP_LOGIN_REQUESTED"
  };
}

// POST /register
export function appRegister(email, password, dispatch) {
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    mode: "cors",
    body: JSON.stringify({
      email: email,
      password: password
    })
  };

  // Call API
  fetch(BASE_URL + "/register", options)
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
        type: "APP_REGISTER_SUCCEED"
      });
    })

    // Error
    .catch(e => {
      dispatch({
        type: "APP_REGISTER_FAILED",
        payload: {
          err: e.error ? e.error : e
        }
      });
    });

  // Requested
  return {
    type: "APP_REGISTER_REQUESTED"
  };
}

// GET /status
export function appVerifyToken(dispatch) {
  const token = window.localStorage.getItem("token");

  var options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    },
    mode: "cors"
  };

  // Call API
  fetch(BASE_URL + "/status", options)
    .then(response => {
      switch (response.status) {
        case 200:
          return response.json();
        case 400:
          return Promise.reject("Token unavailable");
        case 401:
          return Promise.reject("Please log in");
        default:
          return Promise.reject("Server error");
      }
    })

    // Success
    .then(data => {
      console.log(data.status);
    })

    // Error
    .catch(e => {
      window.localStorage.removeItem("token");
      dispatch({
        type: "APP_INVALID_TOKEN",
        payload: {
          err: e.error ? e.error : e
        }
      });
    });

  // Requested
  return {
    type: "APP_VERIFY_TOKEN"
  };
}

// OFFLINE logout ---
export function appLogout() {
  window.localStorage.removeItem("token");
  return {
    type: "APP_LOGOUT_DONE"
  };
}
