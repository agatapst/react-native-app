import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AuthStackNavigator from "./AuthStackNavigator";
import PrivateStackNavigator from "./PrivateStackNavigator";

export default appStack = createAppContainer(
  createSwitchNavigator({
    Auth: AuthStackNavigator,
    Private: PrivateStackNavigator
  })
);
