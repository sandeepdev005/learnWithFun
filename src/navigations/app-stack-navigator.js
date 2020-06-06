import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PdfViewerScreen} from '_scenes';

const AppStackNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="PdfViewerScreen" component={PdfViewerScreen} />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
