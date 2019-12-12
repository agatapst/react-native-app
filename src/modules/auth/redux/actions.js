import { call, select } from 'redux-saga/effects';
import { apiAction } from '../../../base/redux/utils';
import { API } from '../../../common/utils/apiUrls';

const prefix = '@@auth/';

export const SIGN_UP = `${prefix}SIGN_UP`;
export const SIGN_IN = `${prefix}SIGN_IN`;
export const AFTER_LOGIN = `${prefix}AFTER_LOGIN`;

export const authActions = {
    signUp: (payload, navigation) => {
        return apiAction(SIGN_UP, 'POST', API.SIGN_UP, {
            payload,
            afterSagaSuccess: () => {
                navigation.navigate('SignIn');
            },
        });
    },
    // BELOW ONLY EXAMPLE 
    signIn: payload => apiAction(SIGN_IN, 'POST', API.SIGN_IN, {
        payload,
        afterSagaSuccess: function* () {
            const token = yield select(({ auth: { signIn: { data } } }) => data);
            SecureStore.setItemAsync('token', token)
        }
    }),
    afterLogin: payload => apiAction(AFTER_LOGIN, 'POST', API.AFTER_LOGIN_ENDPOINT, { payload }),
};
