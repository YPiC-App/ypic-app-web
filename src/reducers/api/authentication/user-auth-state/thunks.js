import { activateAuthStateListener } from 'services/authentication';
import { setUserData } from 'reducers/user/actions';
import {
  getUserAuthStateRequested,
  getUserAuthStateSucceeded,
} from './actions';

const handleAuthStateChange = dispatch => authData => {
  dispatch(getUserAuthStateRequested());
  dispatch(setUserData(authData));
  dispatch(getUserAuthStateSucceeded());
};

// eslint-disable-next-line
export const activateAuthStateListenerAsync = () => dispatch => {
  activateAuthStateListener(handleAuthStateChange(dispatch));
};
