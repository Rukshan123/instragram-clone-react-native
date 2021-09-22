import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import {firebase} from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
import {Divider} from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {useNavigation} from '@react-navigation/native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
GoogleSignin.configure({
  webClientId:
    '514038534654-3mbqlg4aalmb8qch9ahs47lr61fc5qim.apps.googleusercontent.com',
});
import {
  NativeBaseProvider,
  Box,
  ScrollView,
  VStack,
  FormControl,
  Input,
  Button,
  HStack,
  IconButton,
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

  onGoogleButtonPress = async () => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };

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
              <Input
                color="white"
                style={{borderWidth: 2}}
                size="sm"
                placeholder="Email"
                placeholderTextColor="blueGray.400"
                onChangeText={email => this.setState({email})}
              />
            </FormControl>
            <FormControl mt={4}>
              <Input
                color="white"
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
            <HStack justifyContent="center" alignItem="center" mt={2}>
              <IconButton
                style={{
                  marginHorizontal: 10,
                }}
                variant="unstyled"
                startIcon={
                  <FontAwesome5 name={'facebook'} size={45} color="#1457C2" />
                }
              />
              <IconButton
                onPress={this.onGoogleButtonPress}
                style={{
                  marginHorizontal: 10,

                  borderRadius: 25,
                }}
                variant="link"
                startIcon={
                  <FontAwesome5 name={'google'} size={45} color="#B8232D" />
                }
              />
            </HStack>
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
