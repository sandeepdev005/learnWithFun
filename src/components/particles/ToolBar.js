import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Colors} from '_styles';

const ToolBar = () => {
  return (
    <View style={styles.container}>
      <Text>ToolBar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: Colors.PRIMARY,
  },
});

export default ToolBar;
