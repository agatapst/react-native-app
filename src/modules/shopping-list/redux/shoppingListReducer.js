import { ADD_TO_SHOPPING_LIST, REMOVE_FROM_SHOPPING_LIST } from './actions';

const initialState = {
  dishesIds: [],
};

export const shoppingListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_SHOPPING_LIST:
      return {
        ...state,
        dishesIds: [...state.dishesIds, action.dishId],
      };
    case REMOVE_FROM_SHOPPING_LIST:
      return {
        ...state,
        dishesIds: state.dishesIds.filter((dishId) => dishId !== action.dishId),
      };
    default:
      return state;
  }
};
