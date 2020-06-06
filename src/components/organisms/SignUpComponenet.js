import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  Alert,
  AsyncStorage,
} from 'react-native';
import {Colors} from '_styles';
import {Header} from '_particles';

const SignUpComponenet = props => {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [phoneNumber, setPhoneNumber] = useState('');

  const registerUser = async () => {
    if (
      name.length !== 0 &&
      email.length !== 0 &&
      password.length !== 0 &&
      phoneNumber.length !== 0
    ) {
      let user = {
        userName: name,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
      };

      try {
        await AsyncStorage.setItem('USER', JSON.stringify(user));
        props.navigation.navigate('Home');
      } catch (err) {
        Alert.alert(
          'Alert',
          'Something went wrong while saving the data. Please try again.',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          {cancelable: false},
        );
      }
    } else {
      Alert.alert(
        'Alert',
        'Please Fill all the fields',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
    }
  };

  return (
    <View>
      <Header name={'Sign up'} />
      <TextInput
        style={styles.textInput}
        placeholder="UserName"
        value={name}
        onChangeText={text => setName(text)}
        selectionColor={Colors.PRIMARY}
        underlineColorAndroid={Colors.PRIMARY}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        selectionColor={Colors.PRIMARY}
        underlineColorAndroid={Colors.PRIMARY}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        selectionColor={Colors.PRIMARY}
        underlineColorAndroid={Colors.PRIMARY}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
        selectionColor={Colors.PRIMARY}
        underlineColorAndroid={Colors.PRIMARY}
      />
      <TouchableOpacity onPress={registerUser}>
        <Text style={styles.text}>Sign Up</Text>
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
export default SignUpComponenet;
