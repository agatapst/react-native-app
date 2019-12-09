import { call, put, takeEvery } from 'redux-saga/effects';
import { REQUEST, SUCCESS, FAILURE } from '../consts';
import { getError, request } from '../../../common/utils';

export const apiSaga = type => {
  function* callApi(action) {
    try {
      const response = yield call(request, action.method, action.endpoint, action.payload);
      yield put({
        type: type + SUCCESS,
        data: response.data || response,
      });
      if (action.afterSagaSuccess) {
        yield call(action.afterSagaSuccess);
      }
    } catch (e) {
      const error = getError(e);
      yield put({
        type: type + FAILURE,
        error,
      });
      if (action.afterSagaFailure) {
        yield call(action.afterSagaFailure, error);
      }
    }
  }

  return function*() {
    yield takeEvery(type + REQUEST, callApi);
  };
};
