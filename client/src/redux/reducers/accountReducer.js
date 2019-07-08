const accountReducer = (
  state = { loaded: false, user: {}, err: "" },
  action
) => {
  switch (action.type) {
    // --- Requested
    case "APP_GET_CURRENT_USER_REQUESTED":
      return { ...state, loaded: false };

    // --- Succeed
    case "APP_GET_CURRENT_USER_SUCCEED": {
      return { ...state, loaded: true, user: action.payload.user[0] };
    }

    // --- Failed
    case "APP_GET_CURRENT_USER_FAILED": {
      return { ...state, loaded: false, err: action.payload.err };
    }

    default:
      return state;
  }
};
export default accountReducer;
