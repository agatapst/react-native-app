import { all, fork } from 'redux-saga/effects';

import watchAuthRequests from '../../modules/auth/redux/sagas';
import watchDishesRequests from '../../modules/dishes/redux/sagas';

export default function*() {
  yield all([fork(watchAuthRequests), fork(watchDishesRequests)]);
}
