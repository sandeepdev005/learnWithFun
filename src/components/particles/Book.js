import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import CardView from 'react-native-cardview';

const Book = props => {
  console.log(`bOOOOOOOOOOOOOOOOOOOOOOOOOOOOKS...............${props.Pdfurl}`);
  const bookCoverImage = {uri: props.imageUrl};

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={
          () => {
            props.navigation.navigate('PdfViewerScreen', {url: props.Pdfurl});
          }
          // console.log(`${props.Pdfurl}`)
        }>
        <CardView
          style={styles.cardViewStyle}
          cardElevation={5}
          cardMaxElevation={5}
          cornerRadius={5}>
          <ImageBackground
            style={{flex: 1, width: undefined, height: undefined}}
            source={bookCoverImage}
            resizeMode="cover"
          />
        </CardView>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardViewStyle: {
    width: 100,
    height: 150,
    marginHorizontal: 5,
    marginTop: 10,
  },
});

export default Book;
