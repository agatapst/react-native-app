import { combineReducers } from 'redux';

import auth from '../../modules/auth/redux/reducers';
import dishes from '../../modules/dishes/redux/reducers';
import shoppingList from '../../modules/shopping-list/redux/reducers';
import navigation from '../../modules/navigation/redux/reducers';

export default combineReducers({
  auth,
  dishes,
  shoppingList,
  navigation,
});
