const accountReducer = (
  state = { loaded: false, updating: false, user: {}, err: "" },
  action
) => {
  switch (action.type) {
    // ------ Requested ------
    case "APP_GET_CURRENT_USER_REQUESTED":
      return { ...state, loaded: false };

    case "APP_PUT_CURRENT_USER_REQUESTED":
      return { ...state, updating: true };

    // ------ Succeed ------
    case "APP_GET_CURRENT_USER_SUCCEED": {
      return { ...state, loaded: true, user: action.payload.user };
    }

    case "APP_PUT_CURRENT_USER_SUCCEED": {
      return { ...state, updating: false, user: action.payload.user };
    }

    // ------ Failed ------
    case "APP_GET_CURRENT_USER_FAILED": {
      return { ...state, loaded: false, err: action.payload.err };
    }

    case "APP_PUT_CURRENT_USER_FAILED": {
      return { ...state, updating: false, err: action.payload.err };
    }

    default:
      return state;
  }
};
export default accountReducer;
