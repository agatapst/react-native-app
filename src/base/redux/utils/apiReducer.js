import { REQUEST, SUCCESS, FAILURE } from '../consts';

const initialState = {
  data: null,
  error: null,
  isFetching: false,
};

export const apiReducer = (type, reduceSuccess) => {
  const makeTypes = param => [param + REQUEST, param + SUCCESS, param + FAILURE];
  const [REQUEST_TYPE, SUCCESS_TYPE, FAILURE_TYPE] = makeTypes(type);

  return (state = initialState, action) => {
    switch (action.type) {
      case REQUEST_TYPE:
        return {
          ...state,
          isFetching: true,
        };
      case SUCCESS_TYPE: {
        const nextState = {
          ...state,
          error: null,
          isFetching: false,
        };
        if (reduceSuccess) {
          return reduceSuccess(nextState, action);
        }
        return {
          nextState,
          error: null,
          data: action.data,
          isFetching: false,
        };
      }
      case FAILURE_TYPE:
        return {
          ...state,
          error: action.error,
          isFetching: false,
        };
      default:
        return state;
    }
  };
};
