import { all, take, put } from 'redux-saga/effects';
import { apiSaga } from '../../../base/redux/utils';
import { SIGN_UP, SIGN_IN, AFTER_LOGIN } from './actions';
import axios from 'axios';

export function* watchAuthRequests() {
    yield all([
      apiSaga(SIGN_UP)(),
      // BELOW ONLY EXAMPLE 
      apiSaga(SIGN_IN)(),
    ]);
  }
