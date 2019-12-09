import { apiAction } from '../../../base/redux/utils';
import { urls } from '../../../../urls';

const prefix = '@@auth/';

export const SIGN_UP = `${prefix}SIGN_UP`;

export const authActions = {
    signUp: (payload, navigation) => {
        return apiAction(SIGN_UP, 'POST', urls.SIGN_UP, {
            payload,
            afterSagaSuccess: () => {
                navigation.navigate(LOGIN);
            },
        });
    },
};
