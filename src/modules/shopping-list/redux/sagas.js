import { all } from 'redux-saga/effects';
import { ADD_TO_SHOPPING_LIST, REMOVE_FROM_SHOPPING_LIST, GENERATE_SHOPPING_LIST } from './actions';
import { apiSaga } from '../../../base/redux/utils';

function* watchShoppingListRequests() {
  yield all([apiSaga(ADD_TO_SHOPPING_LIST)(), apiSaga(REMOVE_FROM_SHOPPING_LIST)(), apiSaga(GENERATE_SHOPPING_LIST)()]);
}

export default watchShoppingListRequests;
