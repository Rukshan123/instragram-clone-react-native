import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import {firebase} from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
import SocialMediaLogin from '../socialMediaLogin';
import {Divider} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

import {
  NativeBaseProvider,
  Box,
  ScrollView,
  VStack,
  FormControl,
  Input,
  Button,
} from 'native-base';
import {white} from 'react-native-paper/lib/typescript/styles/colors';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {
    const {email, password} = this.state;
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log(' signed in!');
        this.setState({
          email: '',
          password: '',
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    return (
      <NativeBaseProvider>
        <Box
          style={styles.container}
          safeArea
          p={10}
          w="100%"
          h="100%"
          mx="auto">
          <Text style={styles.instaText}>Instagram </Text>
          <VStack space={2}>
            <FormControl mt={2}></FormControl>
            <FormControl mt={4}>
              <FormControl.Label
                _text={{
                  color: 'muted.700',
                  fontSize: 'md',
                  fontWeight: 700,
                }}></FormControl.Label>
              <Input
                style={{borderWidth: 2}}
                size="sm"
                placeholder="Email"
                placeholderTextColor="blueGray.400"
                onChangeText={email => this.setState({email})}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormControl.Label
                _text={{
                  color: 'muted.700',
                  fontSize: 'md',
                  fontWeight: 700,
                }}></FormControl.Label>
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
              onPress={() => this.onSignUp()}
              title="Sign In"
              colorScheme="primary"
              m={5}>
              Log In
            </Button>
            <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>
              Or through
            </Text>
            <SocialMediaLogin />
            <Divider orientation="horizontal" />
            <Text
              style={{
                fontSize: 15,
                color: 'white',
                textAlign: 'center',
                marginTop: 7,
              }}>
              Don't have an account?
            </Text>
            <Text
              onPress={() => this.props.navigation.navigate('Register')}
              style={{
                fontSize: 15,
                color: 'white',
                textAlign: 'center',
                marginTop: 7,
                fontWeight: '700',
              }}>
              Sign Up
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
  instaText: {
    color: 'white',
    fontSize: 32,
    fontFamily: 'italic',
    textAlign: 'center',
  },
});
