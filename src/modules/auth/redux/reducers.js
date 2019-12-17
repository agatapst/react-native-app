import { combineReducers } from 'redux';
import { SIGN_UP, SIGN_IN, TOKEN } from './actions';
import { SUCCESS } from '../../../base/redux/consts';
import { apiReducer } from '../../../base/redux/utils';

const currentUserInitialState = {
  token: null,
};
function currentUserReducer(state = currentUserInitialState, action) {
  switch (action.type) {
    case SIGN_IN + SUCCESS:
      return {
        ...state,
        token: action.data.token,
      };
    case TOKEN + SUCCESS:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
}

export default combineReducers({
  signUp: apiReducer(SIGN_UP),
  signIn: apiReducer(SIGN_IN),
  currentUser: currentUserReducer,
});
