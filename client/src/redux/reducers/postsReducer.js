const postsReducer = (
  state = { post: {}, loaded: false, status: "", err: "" },
  action
) => {
  switch (action.type) {
    // ------ reset status ------
    case "APP_POST_STATUS_NEW_POST_RESET":
      return { ...state, status: "", err: "" };

    // ------ Requested ------
    case "APP_POST_NEW_POST_REQUESTED":
      return { ...state };

    // ------ Succeed ------
    case "APP_POST_NEW_POST_SUCCEED": {
      return {
        ...state,
        post: action.payload.post,
        status: action.payload.status
      };
    }

    // ------ Failed ------
    case "APP_POST_NEW_POST_FAILED": {
      return {
        ...state,
        status: action.payload.status,
        err: action.payload.err
      };
    }

    default:
      return state;
  }
};
export default postsReducer;
