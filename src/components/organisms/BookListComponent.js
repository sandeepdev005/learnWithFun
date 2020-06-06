import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {Book} from '_particles';

const BookListComponent = props => {
  const renderGridItem = ({item, index}) => (
    <Book
      navigation={props.navigation}
      Pdfurl={item.Pdfurl}
      imageUrl={item.bookCoverImage}
    />
  );

  const dataSource = require('../../services/bookdata.json');

  console.log(`data from local storage .... ${dataSource.data}`);

  return (
    <View style={styles.container}>
      <FlatList
        data={dataSource.data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(item, index) => renderGridItem(item, index)}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    backgroundColor: '#F5FCFF',
  },
});

export default BookListComponent;
