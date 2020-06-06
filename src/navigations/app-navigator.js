import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {HomeScreen, AboutScreen, PdfViewerScreen} from '_scenes';
import Icon from 'react-native-vector-icons/Ionicons';

const TabNavigatorConfig = {
  initialRouteName: 'HomeScreen',
  header: null,
  headerMode: 'none',
};

// const PdfViewerScreen_stackNavigator = createStackNavigator({
//   PdfViewerScreen: {
//     screen: PdfViewerScreen,
//     navigationOptions: {headerShown: false},
//   },
// });

const HomeStack = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
    PdfViewerScreen: {
      screen: PdfViewerScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'HomeScreen',
    navigationOptions: {
      header: null,
    },
  },
);

const RouteConfigs = {
  HomeScreen: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-home" color={tintColor} size={25} />
      ),
    },
  },

  // PdfViewerScreen: {
  //   screen: PdfViewerScreen_stackNavigator,
  //   navigationOptions: {
  //     drawerLabel: 'PdfViewerScreen',
  //   },
  // },

  About: {
    screen: AboutScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-person" color={tintColor} size={25} />
      ),
    },
  },
};

const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);
export default AppNavigator;
