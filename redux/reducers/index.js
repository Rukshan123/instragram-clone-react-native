import {combineReducers} from 'redux';
import {user} from './user';

//store the states and updating recieving data

const Reducers = combineReducers({
  userState: user,
});

export default Reducers;
