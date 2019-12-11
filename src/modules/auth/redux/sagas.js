import { all, call, takeEvery, put } from "redux-saga/effects";
import { apiSaga } from "../../../base/redux/utils";
import { SIGN_UP, SIGN_IN, TOKEN } from "./actions";
import { REQUEST, SUCCESS } from "../../../base/redux/consts";
import * as SecureStore from "expo-secure-store";

API_TOKEN_STORAGE_KEY = "API_TOKEN";

function* saveTokenToSecureStore(responseData) {
  yield call(
    SecureStore.setItemAsync,
    API_TOKEN_STORAGE_KEY,
    responseData.token
  );
}

function* getToken(action) {
  token = yield call(SecureStore.getItemAsync, API_TOKEN_STORAGE_KEY);
  yield put({
    type: TOKEN + SUCCESS,
    token
  });
}

function* tokenSaga() {
  yield takeEvery(TOKEN + REQUEST, getToken);
}

export function* watchAuthRequests() {
  yield all([
    apiSaga(SIGN_UP)(),
    apiSaga(SIGN_IN, saveTokenToSecureStore)(),
    tokenSaga()
  ]);
}
