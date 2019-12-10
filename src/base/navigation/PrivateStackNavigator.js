import React from "react";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import FriendsScreen from "../screens/FriendsScreen";
import SettingsMenuScreen from "../screens/SettingsMenuScreen";
import ProfileScreen from "../screens/ProfileScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import { createStackNavigator } from "react-navigation-stack";

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
    initialRouteName: "SettingsMenu"
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
    Friends: {
      screen: FriendsScreen,
      navigationOptions: {
        title: "Friends",
        tabBarLabel: "Friends",
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
    // TODO: global routes
    initialRouteName: "Home"
  }
);

const PrivateStackNavigator = createStackNavigator(
  {
    BottomNavigator: MainTabNavigator
  },
  {
    initialRouteName: "BottomNavigator",
    backBehavior: "none"
  }
);

export default PrivateStackNavigator;
