import { combineReducers } from 'redux';
import { GET_DISHES, GET_DISH } from './actions';
import { apiReducer } from '../../../base/redux/utils';

export default combineReducers({
  getDishes: apiReducer(GET_DISHES, (state, action) => {
    if (action.loadMore && state.data && Array.isArray(state.data.data)) {
      return {
        ...state,
        data: {
          ...action.data,
          data: [...state.data.data, ...action.data.data],
        },
      };
    }
    return {
      ...state,
      data: action.data,
    };
  }),
  getDish: apiReducer(GET_DISH),
});
