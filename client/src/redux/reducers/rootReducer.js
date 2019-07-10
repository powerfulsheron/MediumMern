import { combineReducers } from "redux";
import authReducer from "./authReducer";
import accountReducer from "./accountReducer";
import postsReducer from "./postsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  account: accountReducer,
  posts: postsReducer
});

export default rootReducer;
