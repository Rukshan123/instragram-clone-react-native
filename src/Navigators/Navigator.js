import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginAndRegister from "../screens/LoginAndRegister"
import Social from "../components/socialMediaLogin"
import Home from "../screens/Home"
import DrawNavigator from '../components/DrawNavigator';


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
         initialRouteName="LoginAndRegister">
          <Stack.Screen name="LoginAndRegister" component={LoginAndRegister} />
          <Stack.Screen name="Social" component={Social} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="DrawNavigator" component={DrawNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
     
    )
  }
}