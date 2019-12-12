import { combineReducers } from 'redux';
import { SIGN_UP, SIGN_IN, AFTER_LOGIN } from './actions';
import { apiReducer } from '../../../base/redux/utils';

export default combineReducers({
  signUp: apiReducer(SIGN_UP),
  // BELOW ONLY EXAMPLE 
  signIn: apiReducer(SIGN_IN),
});
