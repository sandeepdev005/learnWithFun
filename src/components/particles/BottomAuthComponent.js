import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {Colors} from '_styles';

const BottomAuthComponent = ({
  onPressLogin,
  onPressSignUp,
  signImageUrl,
  signUpImageUrl,
}) => {
  const signInImage = signImageUrl
    ? require('../../assets/images/signin.png')
    : require('../../assets/images/sign_inactive.png');
  const signUpImage = signUpImageUrl
    ? require('../../assets/images/signup.png')
    : require('../../assets/images/signup_inactive.png');

  const signInColor = signImageUrl ? Colors.PRIMARY : Colors.GRAY_DARK;
  const signUpColor = signUpImageUrl ? Colors.PRIMARY : Colors.GRAY_DARK;

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={onPressLogin}>
          <Image style={styles.logo} source={signInImage} />
        </TouchableOpacity>
        <Text style={{color: signInColor}}>Sign In</Text>
      </View>

      <View>
        <TouchableOpacity onPress={onPressSignUp}>
          <Image style={styles.logo} source={signUpImage} />
        </TouchableOpacity>
        <Text style={{color: signUpColor}}>Sign Up</Text>
      </View>
    </View>
  );
};

export default BottomAuthComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  logo: {
    height: 35,
    width: 35,
  },
});
