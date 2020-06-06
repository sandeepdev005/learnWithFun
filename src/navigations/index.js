import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AuthNavigator from './auth-navigator';
import AppNavigator from './app-navigator';
import {createStackNavigator} from 'react-navigation-stack';
import {PdfViewerScreen} from '_scenes';

const MyStackNavigator = createStackNavigator(
  {
    PdfViewerScreen: PdfViewerScreen,
  },
  {
    initialRouteName: 'PdfViewerScreen',
  },
);

const RootNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigator,
    App: AppNavigator,
    // AppStack: MyStackNavigator,
  },
  {
    initialRouteName: 'Auth',
  },
);

export default createAppContainer(RootNavigator);
