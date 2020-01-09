import { combineReducers } from 'redux';

import auth from '../../modules/auth/redux/reducers';
import dishes from '../../modules/dishes/redux/reducers';

export default combineReducers({
  auth,
  dishes,
});
