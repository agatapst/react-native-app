import { all } from 'redux-saga/effects';
import { GET_DISHES, GET_DISH } from './actions';
import { apiSaga } from '../../../base/redux/utils';

function* watchDishesRequests() {
  yield all([apiSaga(GET_DISHES)(), apiSaga(GET_DISH)()]);
}

export default watchDishesRequests;
