import { apiAction } from '../../../base/redux/utils';
import { API } from '../../../common/utils/apiUrls';

const prefix = '@@dishes/';

export const GET_DISHES = `${prefix}GET_DISHES`;
export const GET_DISH = `${prefix}GET_DISH`;

export const getDishes = ({
  page = 0,
  perPage = 10,
  query = '',
  filters = {},
  loadMore = false,
} = {}) => {
  let filtersQuery = '';
  const searchQuery = query ? `&search=${query}` : '';

  Object.keys(filters).forEach((filterKey) => {
    if (filters[filterKey]) {
      filtersQuery += `&filters[${filterKey}]=${filters[filterKey]}`;
    }
  });

  return apiAction(
    GET_DISHES,
    'GET',
    `${API.GET_DISHES}?page=${page}&perPage=${perPage}${searchQuery}${filtersQuery}`,
    { loadMore },
  );
};

export const getDish = (id) =>
  apiAction(GET_DISHES, 'GET', `${API.GET_DISH}/${id}`);
