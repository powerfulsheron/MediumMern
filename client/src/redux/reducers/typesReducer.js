const typesReducer = (
  state = {
    types: [],
    loaded: false,
    status: "",
    err: ""
  },
  action
) => {
  switch (action.type) {
    // -- requested
    case "APP_GET_ALL_TYPE_REQUESTED":
      return { ...state, loaded: false };

    // -- succeed
    case "APP_GET_ALL_TYPE_SUCCEED":
      return { ...state, types: action.payload.types, loaded: true };

    // -- failed
    case "APP_GET_ALL_TYPE_FAILED":
      return { ...state, err: action.payload.err, loaded: false };

    default:
      return state;
  }
};

export default typesReducer;
