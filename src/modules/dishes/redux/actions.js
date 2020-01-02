/* eslint-disable implicit-arrow-linebreak */
import { apiAction } from '../../../base/redux/utils';
import { API } from '../../../common/utils/apiUrls';

const prefix = '@@dishes/';

export const GET_DISHES = `${prefix}GET_DISHES`;

export const getDishes = () => apiAction(GET_DISHES, 'GET', API.GET_DISHES);
