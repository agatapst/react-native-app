import { all, fork } from 'redux-saga/effects';

import watchAuthRequests from '../../modules/auth/redux/sagas';
import watchConversationsRequests from '../../modules/conversations/redux/sagas';

export default function*() {
  yield all([fork(watchAuthRequests), fork(watchConversationsRequests)]);
}
