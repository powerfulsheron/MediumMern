import { combineReducers } from "redux";
import authReducer from "./authReducer";
import accountReducer from "./accountReducer";
import postsReducer from "./postsReducer";
import typesReducer from "./typesReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  account: accountReducer,
  posts: postsReducer,
  types: typesReducer,
  user: userReducer
});

export default rootReducer;
