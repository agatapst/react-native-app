import React from "react";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import ConversationsScreen from "../screens/ConversationsScreen";
import SettingsMenuScreen from "../screens/SettingsMenuScreen";
import ProfileScreen from "../screens/ProfileScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import { createStackNavigator } from "react-navigation-stack";
import Colors from "../constants/Colors";
import Routes from "../constants/Routes";

const { SETTINGS_MENU_ROUTE, HOME_ROUTE, BOTTOM_NAVIGATOR_ROUTE } = Routes;

const SettingsStack = createStackNavigator(
  {
    SettingsMenu: {
      screen: SettingsMenuScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: () => ({
        header: null
      })
    }
  },
  {
    initialRouteName: SETTINGS_MENU_ROUTE
  }
);

const MainTabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Home",
        tabBarLabel: "Home",
        tabBarIcon: <Ionicons name="ios-home" size={24} color="white" />
      }
    },
    Conversations: {
      screen: ConversationsScreen,
      navigationOptions: {
        title: "Conversations",
        tabBarLabel: "Conversations",
        tabBarIcon: <Ionicons name="ios-person-add" size={24} color="white" />
      }
    },
    Settings: {
      screen: SettingsStack,
      navigationOptions: {
        title: "Settings",
        tabBarLabel: "Settings",
        tabBarIcon: <Ionicons name="ios-settings" size={24} color="white" />
      }
    }
  },
  {
    initialRouteName: HOME_ROUTE,
    shifting: true,
    barStyle: {
      backgroundColor: Colors.blue
    }
  }
);

const PrivateStackNavigator = createStackNavigator(
  {
    BottomNavigator: MainTabNavigator
  },
  {
    initialRouteName: BOTTOM_NAVIGATOR_ROUTE,
    backBehavior: "none"
  }
);

export default PrivateStackNavigator;
