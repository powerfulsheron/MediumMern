import { combineReducers } from "redux";
import authReducer from "./authReducer";
import accountReducer from "./accountReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  account: accountReducer
});

export default rootReducer;
