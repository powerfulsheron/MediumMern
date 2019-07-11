import { combineReducers } from "redux";
import authReducer from "./authReducer";
import accountReducer from "./accountReducer";
import postsReducer from "./postsReducer";
import typesReducer from "./typesReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  account: accountReducer,
  posts: postsReducer,
  types: typesReducer
});

export default rootReducer;
