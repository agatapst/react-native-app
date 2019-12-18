import { combineReducers } from 'redux';

import auth from '../../modules/auth/redux/reducers';
import conversations from '../../modules/conversations/redux/reducers';

export default combineReducers({
  auth,
  conversations,
});
