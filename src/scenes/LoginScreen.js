import React, {useState} from 'react';
import {StyleSheet, TouchableHighlight, View} from 'react-native';
import {Colors} from '_styles';
import {BottomAuthComponent} from '_particles';
import {SignUpComponenet, LoginComponent} from '_organisms';

const LoginScreen = ({navigation}) => {
  let [errortext, setErrortext] = useState('');
  let [signIn, setsignIn] = useState(true);

  const signInPress = () => {
    console.log('sign in pressed true');
    setsignIn(true);
  };

  const signUpPress = () => {
    console.log('sign in pressed  false');
    setsignIn(false);
  };

  if (signIn) {
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <LoginComponent navigation={navigation} />
        </View>
        <BottomAuthComponent
          onPressLogin={signInPress}
          onPressSignUp={signUpPress}
          signImageUrl={true}
          signUpImageUrl={false}
        />
      </View>
    );
  } else {
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <SignUpComponenet navigation={navigation} />
        </View>
        <BottomAuthComponent
          onPressLogin={signInPress}
          onPressSignUp={signUpPress}
          signImageUrl={false}
          signUpImageUrl={true}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    paddingLeft: 6,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 25,
  },
});

export default LoginScreen;
