import { all } from 'redux-saga/effects';
import { GET_CONVERSATIONS } from './actions';
import { apiSaga } from '../../../base/redux/utils';

function* watchConversationsRequests() {
  yield all([apiSaga(GET_CONVERSATIONS)()]);
}

export default watchConversationsRequests;
