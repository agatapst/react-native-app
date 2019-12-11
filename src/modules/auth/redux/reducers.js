import { combineReducers } from "redux";
import { SIGN_UP, SIGN_IN } from "./actions";
import { apiReducer } from "../../../base/redux/utils";

export default combineReducers({
  signUp: apiReducer(SIGN_UP),
  signIn: apiReducer(SIGN_IN)
});
