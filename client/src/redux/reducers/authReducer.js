const authReducer = (state = { token: "", logged: false }, action) => {
  switch (action.type) {
    // Auth success
    case "APP_LOGIN_SUCCEED": {
      console.log("Auth succeed");
      return {
        token: action.payload.token,
        logged: true
      };
    }

    // Auth requested
    case "APP_LOGIN_REQUESTED": {
      console.log("Auth requested");
      return {
        token: "",
        logged: false
      };
    }

    // Auth failed
    case "APP_LOGIN_FAILED": {
      console.error("Auth Failed");
      return {
        token: "",
        logged: false
      };
    }

    // Default
    default:
      return state;
  }
};
export default authReducer;
