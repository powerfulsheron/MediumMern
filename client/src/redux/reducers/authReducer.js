const authReducer = (
  state = {
    token: window.localStorage.getItem("token"),
    logged: window.localStorage.getItem("token") ? true : false,
    err: "",
    success: ""
  },
  action
) => {
  switch (action.type) {
    // Auth requested
    case "APP_LOGIN_REQUESTED": {
      return {
        ...state,
        success: ""
      };
    }

    // Verification du token
    case "APP_VERIFY_TOKEN": {
      return {
        ...state,
        success: ""
      };
    }

    // Registration requested
    case "APP_REGISTER_REQUESTED": {
      return {
        ...state,
        success: ""
      };
    }

    // Auth success
    case "APP_LOGIN_SUCCEED": {
      return {
        ...state,
        token: action.payload.token,
        logged: true,
        err: "",
        success: "Login succeed !"
      };
    }

    // Register succeed
    case "APP_REGISTER_SUCCEED": {
      return {
        ...state,
        success: "Register succeed !"
      };
    }

    // Auth failed
    case "APP_LOGIN_FAILED": {
      return {
        ...state,
        logged: false,
        err: action.payload.err,
        success: ""
      };
    }

    // Register failed
    case "APP_REGISTER_FAILED": {
      return {
        ...state,
        err: action.payload.err,
        success: ""
      };
    }

    // Invalid Token
    case "APP_INVALID_TOKEN": {
      return {
        ...state,
        token: "",
        logged: false,
        err: action.payload.err,
        success: ""
      };
    }

    // Logout succeed
    case "APP_LOGOUT_DONE": {
      return {
        ...state,
        token: "",
        logged: false,
        err: "",
        success: "Logout succeed !"
      };
    }

    // Default
    default:
      return state;
  }
};
export default authReducer;
