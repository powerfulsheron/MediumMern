const authReducer = (
  state = {
    token: window.localStorage.getItem("token"),
    logged: false,
    err: ""
  },
  action
) => {
  switch (action.type) {
    // Auth success
    case "APP_LOGIN_SUCCEED": {
      window.localStorage.setItem("token", action.payload.token);
      return {
        token: action.payload.token,
        logged: action.payload.logged,
        err: ""
      };
    }

    // Auth requested
    case "APP_LOGIN_REQUESTED": {
      return state;
    }

    // Auth failed
    case "APP_LOGIN_FAILED": {
      return {
        token: "",
        logged: action.payload.logged,
        err: action.payload.err
      };
    }

    // Default
    default:
      return state;
  }
};
export default authReducer;
