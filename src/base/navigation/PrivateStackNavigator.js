import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import DishesScreen from '../screens/DishesScreen/DishesScreen';
import DishScreen from '../screens/DishScreen';
import SettingsMenuScreen from '../screens/SettingsMenuScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';
import Routes from '../constants/Routes';
import ShoppingListScreen from '../screens/ShoppingListScreen/ShoppingListScreen';
import { store } from '../../../App';
import { changeScreen } from '../../modules/navigation/redux/actions';

const {
  SETTINGS_MENU_ROUTE,
  HOME_ROUTE,
  BOTTOM_NAVIGATOR_ROUTE,
  DISHES_ROUTE,
  SHOPPING_LIST_ROUTE,
} = Routes;

const SettingsStack = createStackNavigator(
  {
    SettingsMenu: {
      screen: SettingsMenuScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
  },
  {
    initialRouteName: SETTINGS_MENU_ROUTE,
  },
);

const DishesStack = createStackNavigator(
  {
    Dishes: {
      screen: DishesScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Dish: {
      screen: DishScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
  },
  {
    initialRouteName: DISHES_ROUTE,
  },
);

const ShoppingListStack = createStackNavigator(
  {
    ShoppingList: {
      screen: ShoppingListScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
  },
  {
    initialRouteName: SHOPPING_LIST_ROUTE,
  },
);

const onNavigationButtonPressed = ({ defaultHandler, navigation }) => {
  store.dispatch(changeScreen(navigation.state.routeName));
  defaultHandler();
};

const MainTabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
        tabBarLabel: 'Home',
        tabBarIcon: <Ionicons name="ios-home" size={24} color="white" />,
      },
    },
    Dishes: {
      screen: DishesStack,
      navigationOptions: {
        title: 'Dishes',
        tabBarLabel: 'Dishes',
        tabBarIcon: <Ionicons name="ios-pizza" size={24} color="white" />,
        tabBarOnPress: onNavigationButtonPressed,
      },
    },
    ShoppingList: {
      screen: ShoppingListStack,
      navigationOptions: {
        title: 'Shopping List',
        tabBarLabel: 'Shopping List',
        tabBarIcon: <MaterialIcons name="shopping-cart" size={24} color="white" />,
        tabBarOnPress: onNavigationButtonPressed,
      },
    },
    Settings: {
      screen: SettingsStack,
      navigationOptions: {
        title: 'Settings',
        tabBarLabel: 'Settings',
        tabBarIcon: <Ionicons name="ios-settings" size={24} color="white" />,
      },
    },
  },
  {
    initialRouteName: HOME_ROUTE,

    barStyle: {
      backgroundColor: Colors.brightRed,
    },
  },
);

const PrivateStackNavigator = createStackNavigator(
  {
    BottomNavigator: MainTabNavigator,
  },
  {
    initialRouteName: BOTTOM_NAVIGATOR_ROUTE,
    backBehavior: 'none',
  },
);

export default PrivateStackNavigator;
