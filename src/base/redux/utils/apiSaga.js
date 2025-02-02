import { call, put, takeEvery } from 'redux-saga/effects';
import { REQUEST, SUCCESS, FAILURE } from '../consts';
import { getError, request } from '../../../common/utils';

export const apiSaga = (type, onSagaSuccess) => {
  function* callApi(action) {
    try {
      const response = yield call(
        request,
        action.method,
        action.endpoint,
        action.payload,
      );
      yield put({
        type: type + SUCCESS,
        data: response.data || response,
        loadMore: action.loadMore,
      });
      if (onSagaSuccess) {
        yield* onSagaSuccess(response.data);
      }
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

  // eslint-disable-next-line func-names
  return function*() {
    yield takeEvery(type + REQUEST, callApi);
  };
};
