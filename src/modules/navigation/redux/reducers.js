import { CHANGE_SCREEN } from './actions';

const initialState = {
  screen: '',
};

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SCREEN:
      return {
        ...state,
        screen: action.screen,
      };
    default:
      return state;
  }
};

export default navigationReducer;
