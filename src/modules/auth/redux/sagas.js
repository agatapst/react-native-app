import { all } from 'redux-saga/effects';
import { apiSaga } from '../../../base/redux/utils';
import { SIGN_UP } from './actions';

export function* watchAuthRequests() {
    yield all([apiSaga(SIGN_UP)()]);
  }
