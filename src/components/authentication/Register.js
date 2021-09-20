import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
import {firebase} from '@react-native-firebase/auth';
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
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        firebase
          .firestore()
          .collection('users')
          .doc(firebase.auth().currentUser.uid)
          .set({
            name,
            email,
          });
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <NativeBaseProvider>
        <ScrollView>
          <Box safeArea flex={1} p={2} w="95%" mx="auto">
            <VStack space={2}>
              <FormControl mt={2}>
                <FormControl.Label
                  _text={{
                    color: 'muted.700',
                    fontSize: 'md',
                    fontWeight: 700,
                  }}>
                  Name
                </FormControl.Label>
                <Input
                  style={{borderWidth: 2}}
                  size="sm"
                  placeholder="Name"
                  placeholderTextColor="blueGray.400"
                  onChangeText={name => this.setState({name})}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormControl.Label
                  _text={{
                    color: 'muted.700',
                    fontSize: 'md',
                    fontWeight: 700,
                  }}>
                  Email
                </FormControl.Label>
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
                  }}>
                  Password
                </FormControl.Label>
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
                title="Sign Up"
                colorScheme="teal"
                mr={2}>
                Save
              </Button>
            </VStack>
          </Box>
        </ScrollView>
      </NativeBaseProvider>
    );
  }
}
