import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {Colors} from '_styles';

const Header = ({name}) => (
  <View>
    <Image
      style={styles.logo}
      source={require('../../assets/images/logo.png')}
    />
    <Text style={styles.mainHeader}>Welcome</Text>
    <Text style={styles.subHeader}>{name} to Continue </Text>
  </View>
);

const styles = StyleSheet.create({
  logo: {
    height: 45,
    width: 45,
  },
  mainHeader: {
    marginTop: 15,
    color: Colors.BLACK,
    fontSize: 24,
  },
  subHeader: {
    marginBottom: 10,
    marginTop: 5,
    color: Colors.GRAY_DARK,
    fontSize: 22,
  },
});

export default Header;
