import { all, call, takeEvery, put } from 'redux-saga/effects';
import * as SecureStore from 'expo-secure-store';
import { apiSaga } from '../../../base/redux/utils';
import { SIGN_UP, SIGN_IN, TOKEN } from './actions';
import { REQUEST, SUCCESS } from '../../../base/redux/consts';

const API_TOKEN_STORAGE_KEY = 'API_TOKEN';

function* saveTokenToSecureStore(responseData) {
  yield call(
    SecureStore.setItemAsync,
    API_TOKEN_STORAGE_KEY,
    responseData.token,
  );
}

function* getToken() {
  const token = yield call(SecureStore.getItemAsync, API_TOKEN_STORAGE_KEY);
  yield put({
    type: TOKEN + SUCCESS,
    token,
  });
}

function* tokenSaga() {
  yield takeEvery(TOKEN + REQUEST, getToken);
}

function* watchAuthRequests() {
  yield all([
    apiSaga(SIGN_UP)(),
    apiSaga(SIGN_IN, saveTokenToSecureStore)(),
    tokenSaga(),
  ]);
}

export default watchAuthRequests;
