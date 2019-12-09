import { combineReducers } from 'redux';
import { SIGN_UP } from './actions';
import { apiReducer } from '../../../base/redux/utils';

export default combineReducers({
  signUp: apiReducer(SIGN_UP),
});