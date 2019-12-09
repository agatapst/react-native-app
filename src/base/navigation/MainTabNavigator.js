import React from "react";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomepageView from "../containers/Homepage";

const MainTabNavigator = createMaterialBottomTabNavigator(
  {
    Homepage: {
      screen: HomepageView,
      navigationOptions: {
        title: "Homepage 1",
        tabBarLabel: "Homepage",
        tabBarIcon: <Ionicons name="ios-person-add" size={24} color="white" />
      }
    },
    Homepage2: {
      screen: HomepageView,
      navigationOptions: {
        title: "Homepage 2",
        tabBarLabel: "Homepage",
        tabBarIcon: <Ionicons name="ios-person-add" size={24} color="white" />
      }
    },
    Homepage3: {
      screen: HomepageView,
      navigationOptions: {
        title: "Homepage 3",
        tabBarLabel: "Homepage",
        tabBarIcon: <Ionicons name="ios-person-add" size={24} color="white" />
      }
    }
  },
  {
    initialRouteName: "Homepage",
    backBehavior: "none",
    labeled: true
  }
);

export default MainTabNavigator;
