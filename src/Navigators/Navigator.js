import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from "../screens/Login"
import Register from "../screens/Registration"


const Stack = createStackNavigator();

const stackNavigatorOptions = {
  headerShown : false
}

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
         initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
     
    )
  }
}