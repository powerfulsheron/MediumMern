const jwt = require("jsonwebtoken");

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
      var decoded = jwt.verify(data.token, "MyBestSecret");

      // Succeed
      dispatch({
        type: "APP_LOGIN_SUCCEED",
        payload: {
          userID: decoded.id,
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
  // Recupération en localStorage
  var token = window.localStorage.getItem("token");

  jwt.verify(token, "MyBestSecret", (err, decodedToken) => {
    if (err || !decodedToken) {
      window.localStorage.removeItem("token");
      dispatch({
        type: "APP_INVALID_TOKEN",
        payload: {
          err: err
        }
      });
    } else {
      dispatch({
        type: "APP_VALID_TOKEN",
        payload: {
          token: token,
          userID: decodedToken.id
        }
      });
    }
  });

  return {
    type: "APP_TOKEN_REQUESTED"
  };
}
