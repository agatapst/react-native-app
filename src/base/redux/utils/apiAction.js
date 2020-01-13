import { REQUEST } from '../consts';

export const apiAction = (type, method, endpoint, options = {}) => ({
  type: type + REQUEST,
  method,
  endpoint,
  payload: options && options.payload,
  referer: options && options.referer,
  afterSagaSuccess: options && options.afterSagaSuccess,
  afterSagaFailure: options && options.afterSagaFailure,
  loadMore: options.loadMore,
});
