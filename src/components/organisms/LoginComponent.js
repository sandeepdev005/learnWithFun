import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  AsyncStorage,
  Alert,
} from 'react-native';
import {Colors} from '_styles';
import {Header} from '_particles';

const LoginComponent = props => {
  let [email, setEmail] = useState('');
  let [password, setpassword] = useState('');

  const checkLogin = async () => {
    try {
      if (email.length !== 0 && password.length !== 0) {
        let user_json = await AsyncStorage.getItem('USER');
        if (user_json !== null) {
          let user = JSON.parse(user_json);
          if (user.email === email && user.password === password) {
            props.navigation.navigate('HomeScreen');
          } else {
            Alert.alert(
              'Alert',
              'InCorrect EmailId && Password or Not an authorized user.',
            );
          }
        } else {
          Alert.alert('Alert', 'Please register your account to login.');
        }
      } else {
        Alert.alert('Alert', 'Please enter EmailId and Password.');
      }
    } catch (err) {
      Alert.alert('Alert', 'Something went wrong while fetching from server.');
    }
  };

  return (
    <View>
      <Header name={'Sign in'} />
      <TextInput
        style={styles.textInput}
        placeholder="EmailId"
        onChangeText={text => setEmail(text)}
        value={email}
        selectionColor={Colors.PRIMARY}
        underlineColorAndroid={Colors.PRIMARY}
      />
      <TextInput
        style={styles.textInput}
        onChangeText={text => setpassword(text)}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
        selectionColor={Colors.PRIMARY}
        underlineColorAndroid={Colors.PRIMARY}
      />
      <TouchableOpacity onPress={checkLogin}>
        <Text style={styles.text}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginTop: 5,
    height: 50,
    paddingLeft: 6,
    paddingBottom: 15,
  },

  text: {
    marginTop: 10,
    color: Colors.PRIMARY,
    marginLeft: 2,
    fontSize: 24,
  },
});

export default LoginComponent;
