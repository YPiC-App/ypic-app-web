import { signInFacebook } from 'services/authentication';

// eslint-disable-next-line
export const signInFacebookAsync = push => async dispatch => {
  // init Site loading overlay.
  await signInFacebook();
  console.log('Going to push to main now');
  push('/');
};
