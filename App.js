import React, {Component} from 'react';
import Navigator from './src/Navigators/Navigator';
import {firebase} from '@react-native-firebase/auth';
import 'react-native-gesture-handler';
import {View, Text} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      loaded: false,
    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        });
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        });
      }
    });
  }
  render() {
    const {loggedIn, loaded} = this.state;
    if (!loaded) {
      return (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text>Loading</Text>
        </View>
      );
    }
    if (!loggedIn) {
      return <Navigator />;
    }

    return (
      // <View style={{flex: 1, justifyContent: 'center'}}>
      //   <Text>Loaded</Text>
      // </View>
      <Navigator />
    );
  }
}
