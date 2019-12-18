/* eslint-disable implicit-arrow-linebreak */
import { apiAction } from '../../../base/redux/utils';
import { API } from '../../../common/utils/apiUrls';
import { REQUEST } from '../../../base/redux/consts';

const prefix = '@@auth/';

export const SIGN_UP = `${prefix}SIGN_UP`;
export const SIGN_IN = `${prefix}SIGN_IN`;

export const TOKEN = `${prefix}TOKEN`;

export const authActions = {
  signUp: (payload, navigation) =>
    apiAction(SIGN_UP, 'POST', API.SIGN_UP, {
      payload,
      afterSagaSuccess: () => {
        navigation.navigate('SignIn');
      },
    }),
  signIn: (payload, navigation) =>
    apiAction(SIGN_IN, 'POST', API.SIGN_IN, {
      payload,
      afterSagaSuccess: () => {
        navigation.navigate('Home');
      },
    }),
  getToken: () => ({
    type: TOKEN + REQUEST,
  }),
};
