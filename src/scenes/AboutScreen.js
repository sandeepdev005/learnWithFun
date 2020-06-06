import React from 'react';
import {View, Text} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
const AboutScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ViewPager style={{flex: 1}} initialPage={0} showPageIndicator={true}>
        <View
          style={{
            backgroundColor: '#C70039',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 30}}>One</Text>
        </View>
        <View
          style={{
            backgroundColor: '#FF5733',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 30}}>Two</Text>
        </View>
        <View
          style={{
            backgroundColor: '#FFC300',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 30}}>Three</Text>
        </View>
      </ViewPager>
    </View>
  );
};

export default AboutScreen;
