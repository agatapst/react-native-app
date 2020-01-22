import { combineReducers } from 'redux';
import { GET_DISHES, GET_SINGLE_DISH } from './actions';
import { apiReducer } from '../../../base/redux/utils';

export default combineReducers({
  getDishes: apiReducer(GET_DISHES, (state, action) => {
    const stateData = state.data && action.loadMore ? state.data.data : [];

    return {
      ...state,
      data: {
        ...action.data,
        data: [
          ...stateData,
          ...action.data.data.map((item) => ({ ...item, id: `${item.id}_${(new Date()).toISOString()}` })),
        ],
      },
    };
  }),
  getSingleDish: apiReducer(GET_SINGLE_DISH),
});
