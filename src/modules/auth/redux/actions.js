import { apiAction } from '../../../base/redux/utils';
import { API } from '../../../common/utils/apiUrls';

const prefix = '@@auth/';

export const SIGN_UP = `${prefix}SIGN_UP`;

export const authActions = {
    signUp: (payload, navigation) => {
        return apiAction(SIGN_UP, 'POST', API.SIGN_UP, {
            payload,
            afterSagaSuccess: () => {
                navigation.navigate('SignIn');
            },
        });
    },
};
