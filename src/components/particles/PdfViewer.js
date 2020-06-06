import React from 'react';
import {StyleSheet, View} from 'react-native';
import Pdf from 'react-native-pdf';

const PdfViewer = props => {
  console.log(`view page ......${props.url}`);

  const source = {
    uri: props.url,
    // uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
    cache: true,
  };

  return (
    <View style={styles.container}>
      <Pdf
        source={source}
        // onLoadComplete={(numberOfPages, filePath) => {
        //   console.log(`number of pages: ${numberOfPages}`);
        // }}
        // onPageChanged={(page, numberOfPages) => {
        //   console.log(`current page: ${page}`);
        // }}
        // onError={error => {
        //   console.log(error);
        // }}
        // onPressLink={uri => {
        //   console.log(`Link presse: ${uri}`);
        // }}
        style={styles.pdf}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
    width: 400,
    height: undefined,
  },
});

export default PdfViewer;
