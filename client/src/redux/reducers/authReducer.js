const authReducer = (
  state = {
    userID: "",
    token: window.localStorage.getItem("token"),
    logged: window.localStorage.getItem("token") ? true : false,
    err: ""
  },
  action
) => {
  switch (action.type) {
    // Auth requested
    case "APP_LOGIN_REQUESTED": {
      return state;
    }

    // Auth success
    case "APP_LOGIN_SUCCEED": {
      return {
        ...state,
        userID: action.payload.userID,
        token: action.payload.token,
        logged: true
      };
    }

    // Auth failed
    case "APP_LOGIN_FAILED": {
      return {
        ...state,
        logged: true,
        err: action.payload.err
      };
    }

    // Invalid Token
    case "APP_INVALID_TOKEN": {
      return {
        ...state,
        logged: false,
        err: action.payload.err
      };
    }

    case "APP_LOGOUT_DONE": {
      return {
        ...state,
        userID: "",
        token: "",
        logged: false,
        err: ""
      };
    }

    // Default
    default:
      return state;
  }
};
export default authReducer;
