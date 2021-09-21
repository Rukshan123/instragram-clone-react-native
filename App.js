import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import LandingPage from './src/components/authentication/LandingPage';
import Register from './src/components/authentication/Register';
import Login from './src/components/authentication/Login';
import MainScreen from './src/components/main';

import {firebase} from '@react-native-firebase/auth';
import 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';
const Stack = createStackNavigator();

const stackNavigatorOptions = {
  headerShown: false,
};
const store = createStore(rootReducer, applyMiddleware(thunk));

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

    return (
      <Provider store={store}>
        <MainScreen />
      </Provider>
    );
  }
}
