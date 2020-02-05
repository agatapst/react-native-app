import { combineReducers } from 'redux';
import { GENERATE_SHOPPING_LIST } from './actions';
import { apiReducer } from '../../../base/redux/utils';
import { shoppingListReducer } from './shoppingListReducer';

export default combineReducers({
  ingredients: apiReducer(GENERATE_SHOPPING_LIST, (state, action) => ({
    ...state,
    data: action.data,
  })),
  dishes: shoppingListReducer,
});
