const postsReducer = (
  state = {
    posts: [],
    post: {},
    postLoaded: false,
    postsLoaded: false,
    status: "",
    err: ""
  },
  action
) => {
  switch (action.type) {
    // ------ Reset status ------
    case "APP_POST_STATUS_NEW_POST_RESET":
      return { ...state, status: "", err: "" };

    // ------ Requested ------
    case "APP_POST_NEW_POST_REQUESTED":
      return { ...state };

    case "APP_GET_ALL_POST_REQUESTED":
      return { ...state, postsLoaded: false };

    // ------ Succeed ------
    case "APP_POST_NEW_POST_SUCCEED": {
      return {
        ...state,
        post: action.payload.post,
        status: action.payload.status
      };
    }

    case "APP_GET_ALL_POST_SUCCEED": {
      return {
        ...state,
        posts: action.payload.posts,
        status: action.payload.status,
        postsLoaded: true
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

    case "APP_GET_ALL_POST_FAILED": {
      return {
        ...state,
        status: action.payload.status,
        err: action.payload.err,
        postsLoaded: false
      };
    }

    default:
      return state;
  }
};
export default postsReducer;
