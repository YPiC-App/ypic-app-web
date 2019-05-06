import { combineReducers } from 'redux';
import signIn from './sign-in';
import userProfile from './user-profile';

export default combineReducers({ signIn, userProfile });
