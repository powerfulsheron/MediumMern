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
      console.log(response);
      // If failed
      if (response.status !== 200) {
        dispatch({
          type: "APP_LOGIN_FAILED"
        });
        return Promise.reject("Error " + response.status);
      } else {
        return response.json();
      }
    })
    .then(data => {
      console.log(data);
      // Succeed
      dispatch({
        type: "APP_LOGIN_SUCCEED",
        playload: {
          token: data
        }
      });
      this.setState({
        token: data,
        received: true
      });
    })
    .catch(e => console.error(e));

  return {
    type: "APP_LOGIN_REQUESTED"
  };
}
