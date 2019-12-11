import { all } from "redux-saga/effects";
import { apiSaga } from "../../../base/redux/utils";
import { SIGN_UP } from "./actions";
import { SIGN_IN } from "./actions";

export function* watchAuthRequests() {
  yield all([apiSaga(SIGN_UP)(), apiSaga(SIGN_IN)()]);
}
