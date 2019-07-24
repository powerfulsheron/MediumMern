const userReducer = (
  state = {
    user: {},
    userLoaded: false,
    status: "",
    err: ""
  },
  action
) => {
  switch (action.type) {

    // ==========================
    // ------- Requested --------
    // ==========================

    case "APP_GET_ONE_USE_REQUESTED":
      return { ...state, userLoaded: false };

    // ==========================
    // -------- Succeed ---------
    // ==========================

    case "APP_GET_ONE_USER_SUCCEED": {
      return {
        ...state,
        user: action.payload.user,
        status: action.payload.status,
        userLoaded: true
      };
    }

    // ==========================
    // --------- Failed ---------
    // ==========================

    case "APP_GET_ONE_USER_FAILED": {
      return {
        ...state
      };
    }

    default:
      return state;
  }
};
export default userReducer;
