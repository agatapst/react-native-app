import { combineReducers } from 'redux';
import { GET_CONVERSATIONS } from './actions';
import { apiReducer } from '../../../base/redux/utils';

export default combineReducers({
  getConversations: apiReducer(GET_CONVERSATIONS),
});
