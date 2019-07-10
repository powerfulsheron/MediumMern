// ----------------------
// ------   LOGIN  ------
// ----------------------
export function appLogin(email, password, dispatch) {
  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    mode: "cors",
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
    .then(response => {
      if (response.status === 201) {
        return response.json();
      } else if (response.status === 400) {
        return Promise.reject("Invalid email/password");
      } else {
        return Promise.reject("Unexpected error");
      }
    })
    .then(data => {
      // Sauvegarde en localStorage
      window.localStorage.setItem("token", data.token);

      // Succeed
      dispatch({
        type: "APP_LOGIN_SUCCEED",
        payload: {
          token: data.token
        }
      });
    })
    .catch(e => {
      dispatch({
        type: "APP_LOGIN_FAILED",
        payload: {
          err: e.error ? e.error : e
        }
      });
    });

  return {
    type: "APP_LOGIN_REQUESTED"
  };
}

// ----------------------
// ---  VERIFY TOKEN  ---
// ----------------------
export function appVerifyToken(dispatch) {
  const token = window.localStorage.getItem("token");

  fetch("http://localhost:3000/status", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
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
      console.log(data.status);
    })
    .catch(e => {
      window.localStorage.removeItem("token");
      dispatch({
        type: "APP_INVALID_TOKEN",
        payload: {
          err: e.error ? e.error : e
        }
      });
    });

  return {
    type: "APP_VERIFY_TOKEN"
  };
}

// ----------------------
// ---     LOGOUT     ---
// ----------------------
export function appLogout() {
  window.localStorage.removeItem("token");
  return {
    type: "APP_LOGOUT_DONE"
  };
}

// ----------------------
// ---    REGISTER    ---
// ----------------------
export function appRegister(email, password, dispatch) {
  fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    mode: "cors",
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
    .then(response => {
      if (response.status === 201) {
        return response.json();
      } else if (response.status === 400) {
        return Promise.reject("Unexpected error");
      } else {
        return Promise.reject("Unexpected error");
      }
    })
    .then(data => {
      // Succeed
      dispatch({
        type: "APP_REGISTER_SUCCEED"
      });
    })
    .catch(e => {
      dispatch({
        type: "APP_REGISTER_FAILED",
        payload: {
          err: e.error ? e.error : e
        }
      });
    });

  return {
    type: "APP_REGISTER_REQUESTED"
  };
}
