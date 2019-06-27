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
      dispatch({
        type: "APP_LOGIN_SUCCEED",
        payload: {
          token: data.token,
          logged: true,
          err: ""
        }
      });
    })
    .catch(e => {
      dispatch({
        type: "APP_LOGIN_FAILED",
        payload: {
          token: "",
          logged: false,
          err: e.error ? e.error : e
        }
      });
    });

  return {
    type: "APP_LOGIN_REQUESTED",
    payload: {
      token: "",
      logged: false,
      err: ""
    }
  };
}
