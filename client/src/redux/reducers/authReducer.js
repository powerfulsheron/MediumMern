const authReducer = (
  state = {
    token: window.localStorage.getItem("token"),
    logged: window.localStorage.getItem("token") ? true : false,
    
    msgToken: "",
    msgRegister: "",
    msgLogin: "",
    msgLogout: ""
  },
  action
) => {
  switch (action.type) {
    // Reset msg
    case "APP_AUTH_RESET_MSG": {
      return {
        ...state,
        msgToken: "",
        msgRegister: "",
        msgLogin: "",
        msgLogout: ""
      };
    }

    // Auth requested
    case "APP_LOGIN_REQUESTED": {
      return { ...state };
    }

    // Verification du token
    case "APP_VERIFY_TOKEN": {
      return { ...state };
    }

    // Registration requested
    case "APP_REGISTER_REQUESTED": {
      return { ...state };
    }

    // Auth success
    case "APP_LOGIN_SUCCEED": {
      return {
        ...state,
        token: action.payload.token,
        logged: true,
        msgLogin: "Login succeed !"
      };
    }

    // Register succeed
    case "APP_REGISTER_SUCCEED": {
      return {
        ...state,
        msgRegister: "Register succeed !"
      };
    }

    // Auth failed
    case "APP_LOGIN_FAILED": {
      return {
        ...state,
        logged: false,
        msgLogin: action.payload.err
      };
    }

    // Register failed
    case "APP_REGISTER_FAILED": {
      return {
        ...state,
        msgRegister: action.payload.err
      };
    }

    // Invalid Token
    case "APP_INVALID_TOKEN": {
      return {
        ...state,
        token: "",
        logged: false,
        msgToken: action.payload.err
      };
    }

    // Logout succeed
    case "APP_LOGOUT_DONE": {
      return {
        ...state,
        token: "",
        logged: false,
        msgLogout: "Logout succeed !"
      };
    }

    // Default
    default:
      return state;
  }
};
export default authReducer;
