import { combineReducers } from 'redux';
import { GET_DISHES } from './actions';
import { apiReducer } from '../../../base/redux/utils';

export default combineReducers({
  getDishes: apiReducer(GET_DISHES),
});
