/* eslint-disable implicit-arrow-linebreak */
import { apiAction } from '../../../base/redux/utils';
import { API } from '../../../common/utils/apiUrls';

const prefix = '@@conversations/';

export const GET_CONVERSATIONS = `${prefix}GET_CONVERSATIONS`;

export const getConversations = () =>
  apiAction(GET_CONVERSATIONS, 'GET', API.GET_CONVERSATIONS);
