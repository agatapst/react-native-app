import { combineReducers } from 'redux';
import { GET_DISHES, GET_DISH } from './actions';
import { apiReducer } from '../../../base/redux/utils';

export default combineReducers({
  getDishes: apiReducer(GET_DISHES),
  getDish: apiReducer(GET_DISH),
});
