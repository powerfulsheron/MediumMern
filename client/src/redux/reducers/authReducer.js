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

    // Token verify requested
    case "APP_TOKEN_REQUESTED": {
      return state;
    }

    // Auth success
    case "APP_LOGIN_SUCCEED": {
      state.userID = action.payload.userID;
      state.token = action.payload.token;
      state.logged = true;
      return state;
    }

    // Valid Token
    case "APP_VALID_TOKEN": {
      state.userID = action.payload.userID;
      state.token = action.payload.token;
      state.logged = true;
      return state;
    }

    // Auth failed
    case "APP_LOGIN_FAILED": {
      state.logged = false;
      state.err = action.payload.err;
      return state;
    }

    // Invalid Token
    case "APP_INVALID_TOKEN": {
      state.logged = false;
      state.err = action.payload.err;
      return state;
    }

    // Default
    default:
      return state;
  }
};
export default authReducer;
