import { createAppContainer, createSwitchNavigator } from "react-navigation";
import MainTabNavigator from "./MainTabNavigator";
import { AuthStackNavigator } from "./AuthStackNavigator";

export default appStack = createAppContainer(
  createSwitchNavigator({
    Auth: AuthStackNavigator,
    Main: MainTabNavigator
  })
);
