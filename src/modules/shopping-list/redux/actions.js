import { apiAction } from '../../../base/redux/utils';
import { API } from '../../../common/utils/apiUrls';

const prefix = '@@shopping-list/';

export const ADD_TO_SHOPPING_LIST = `${prefix}ADD_TO_SHOPPING_LIST`;
export const GENERATE_SHOPPING_LIST = `${prefix}GENERATE_SHOPPING_LIST`;
export const REMOVE_FROM_SHOPPING_LIST = `${prefix}REMOVE_FROM_SHOPPING_LIST`;

export const addDishToShoppingList = (dishId) => ({
  type: ADD_TO_SHOPPING_LIST,
  dishId,
});

export const removeDishFromShoppingList = (dishId) => ({
  type: REMOVE_FROM_SHOPPING_LIST,
  dishId,
});

export const generateShoppingList = (dishesIds) => apiAction(
  GENERATE_SHOPPING_LIST,
  'POST',
  `${API.GENERATE_SHOPPING_LIST}`,
  { payload: dishesIds },
);
