import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import firestore, {firebase} from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {Divider} from 'react-native-elements';

import {
  NativeBaseProvider,
  Box,
  ScrollView,
  VStack,
  FormControl,
  Input,
  Button,
} from 'native-base';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      name: '',
    };

    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {
    const {email, password, name} = this.state;
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        this.setState({
          email: '',
          password: '',
        });
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  }
  render() {
    return (
      <NativeBaseProvider>
        <Box style={styles.container} p={10} w="100%" h="100%" mx="auto">
          <Text style={styles.RegText}>Register </Text>
          <VStack space={2}>
            <FormControl mt={2}>
              <Input
                style={{borderWidth: 2}}
                size="sm"
                placeholder="Name"
                placeholderTextColor="blueGray.400"
                onChangeText={name => this.setState({name})}
              />
            </FormControl>
            <FormControl mt={4}>
              <Input
                style={{borderWidth: 2}}
                size="sm"
                placeholder="Email"
                placeholderTextColor="blueGray.400"
                onChangeText={email => this.setState({email})}
              />
            </FormControl>
            <FormControl mt={4}>
              <Input
                style={{borderWidth: 2}}
                size="sm"
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor="blueGray.400"
                onChangeText={password => this.setState({password})}
              />
            </FormControl>

            <Button
              style={{marginTop: 20}}
              onPress={() => this.onSignUp()}
              title="Sign Up"
              colorScheme="teal"
              mr={2}>
              Register
            </Button>
            <Divider style={{marginTop: 10}} orientation="horizontal" />
            <Text
              onPress={() => this.props.navigation.navigate('Login')}
              style={{
                fontSize: 15,
                color: 'white',
                textAlign: 'center',
                marginTop: 7,
                fontWeight: '700',
              }}>
              Back
            </Text>
          </VStack>
        </Box>
      </NativeBaseProvider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: 'black',
  },
  RegText: {
    marginBottom: 15,
    color: 'white',
    fontSize: 32,
    fontFamily: 'italic',
    textAlign: 'center',
  },
});
