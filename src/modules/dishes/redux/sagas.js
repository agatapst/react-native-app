import { all } from 'redux-saga/effects';
import { GET_DISHES } from './actions';
import { apiSaga } from '../../../base/redux/utils';

function* watchDishesRequests() {
  yield all([apiSaga(GET_DISHES)()]);
}

export default watchDishesRequests;
