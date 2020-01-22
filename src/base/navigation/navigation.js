import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthStackNavigator from './AuthStackNavigator';
import PrivateStackNavigator from './PrivateStackNavigator';

export const appStack = createAppContainer(
  createSwitchNavigator({
    Auth: AuthStackNavigator,
    Private: PrivateStackNavigator,
  }),
);

export default appStack;
