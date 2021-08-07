import React, { Component } from 'react'
import Navigator from "./src/Navigators/Navigator"
import { firebase } from '@react-native-firebase/auth'


export default class App extends Component {
  render() {
    return (
     <Navigator />
     
    )
  }
}