import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import LandingPage from '../components/authentication/LandingPage';
import Register from '../components/authentication/Register';
import Login from '../components/authentication/Login';

const Stack = createStackNavigator();

const stackNavigatorOptions = {
  headerShown: false,
};

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Login">
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
