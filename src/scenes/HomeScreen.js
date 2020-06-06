import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {ToolBar} from '_particles';
import {BookListComponent} from '_organisms';

const HomeScreen = ({navigation}) => (
  <SafeAreaView style={styles.container}>
    <ToolBar />
    <BookListComponent navigation={navigation} />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
