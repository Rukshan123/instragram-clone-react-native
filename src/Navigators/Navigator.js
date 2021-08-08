import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from "../screens/Login"
import Register from "../screens/Registration"
import Home from "../screens/Home"
import Social from "../components/socialMediaLogin"


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
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Social" component={Social} />
        </Stack.Navigator>
      </NavigationContainer>
     
    )
  }
}