import React from "react";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";

const MainTabNavigator = createMaterialBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Home",
        tabBarLabel: "Home",
        tabBarIcon: <Ionicons name="ios-home" size={24} color="white" />
      }
    },
    LinksScreen: {
      screen: LinksScreen,
      navigationOptions: {
        title: "Links",
        tabBarLabel: "Links",
        tabBarIcon: <Ionicons name="ios-person-add" size={24} color="white" />
      }
    },
    SettingsScreen: {
      screen: SettingsScreen,
      navigationOptions: {
        title: "Settings",
        tabBarLabel: "Settings",
        tabBarIcon: <Ionicons name="ios-settings" size={24} color="white" />
      }
    }
  },
  {
    initialRouteName: "HomeScreen",
    backBehavior: "none",
    labeled: true
  }
);

export default MainTabNavigator;
