import React from 'react';
import {View} from 'react-native';
import {PdfViewer} from '_particles';

const PdfViewerScreen = props => {
  // console.log('PROPS ' + props.Pdfurl);

  const {navigation} = props;
  const url = navigation.getParam('url', 'NO-url');

  console.log(`pdfviewScreen............. ${url}`);

  return (
    <View style={{flex: 1}}>
      <PdfViewer url={url} />
    </View>
  );
};

export default PdfViewerScreen;
