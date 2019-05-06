import { activateAuthStateListener } from 'services/authentication';
import { setUserData } from 'reducers/user/actions';
import {
  getUserAuthStateRequested,
  getUserAuthStateSucceeded,
} from './actions';

const handleAuthStateChange = dispatch => authData => {
  dispatch(getUserAuthStateRequested());
  const { uid, email, displayName, photoURL } = authData;
  dispatch(setUserData({ uid, email, displayName, photoURL }));
  dispatch(getUserAuthStateSucceeded());
};

// eslint-disable-next-line
export const activateAuthStateListenerAsync = () => dispatch => {
  activateAuthStateListener(handleAuthStateChange(dispatch));
};
