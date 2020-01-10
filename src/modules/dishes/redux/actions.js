import { apiAction } from '../../../base/redux/utils';
import { API } from '../../../common/utils/apiUrls';

const prefix = '@@dishes/';

export const GET_DISHES = `${prefix}GET_DISHES`;
export const GET_DISH = `${prefix}GET_DISH`;

export const getDishes = ({
  page = 0,
  perPage = 10,
  query = '',
  loadMore = false,
} = {}) =>
  apiAction(
    GET_DISHES,
    'GET',
    `${API.GET_DISHES}?page=${page}&perPage=${perPage}&search=${query}`,
    { loadMore },
  );

export const getDish = (id) =>
  apiAction(GET_DISHES, 'GET', `${API.GET_DISH}/${id}`);
