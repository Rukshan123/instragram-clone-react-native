import React, { Component } from 'react'
import { StyleSheet, } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginScrn from './Login'
import Register from './Registration'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



const Tab = createMaterialBottomTabNavigator();


export default class Login extends Component {

    render() {
        return (
         
            <Tab.Navigator
              initialRouteName="Login"
              activeColor="#f0edf6"
              inactiveColor="#3e2465"
              barStyle={{ backgroundColor: '#694fad',paddingBottom: 10  }}
            >
              <Tab.Screen 
               name="Login"
                component={LoginScrn}
                options={{
                    tabBarLabel: 'Login',
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="account" color={color} size={24} />
                    ),
                  }}
                 />
              <Tab.Screen 
              name="Register" 
              component={Register}
              options={{
                tabBarLabel: 'Register',
                tabBarTestID:'25',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="registered-trademark" color={color} size={24} />
                   
                  
                ),
              }}
               />
            </Tab.Navigator>
          );
    }
}

const styles = StyleSheet.create({

    tabNavigator:{
       fontSize:25

    }

})





