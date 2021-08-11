import React, { Component } from 'react'
import Navigator from "./src/Navigators/Navigator"
import { firebase } from '@react-native-firebase/auth'
import 'react-native-gesture-handler';


export default class App extends Component {
  render() {
    return (
     <Navigator />
     
    )
  }
}