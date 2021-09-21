//fetch the users
//save user
//save posts

import firestore, {firebase} from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

import {
  USER_STATE_CHANGE,
  USER_POSTS_STATE_CHANGE,
  USER_FOLLOWING_STATE_CHANGE,
  USERS_DATA_STATE_CHANGE,
  USERS_POSTS_STATE_CHANGE,
  USERS_LIKES_STATE_CHANGE,
  CLEAR_DATA,
} from '../constants/index';

export function fetchUser() {
  return dispatch => {
    firebase
      .firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .get()
      .then(snapshot => {
        if (snapshot.exists) {
          dispatch({type: USER_STATE_CHANGE, currentUser: snapshot.data()});
        } else {
          console.log('does not exist');
        }
      });
  };
}
