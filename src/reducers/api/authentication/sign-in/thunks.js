import { push } from 'connected-react-router';
import { signInFacebook } from 'services/authentication';

// eslint-disable-next-line
export const signInFacebookAsync = () => async dispatch => {
  // init Site loading overlay.
  await signInFacebook();
  console.log('Going to push to main now');
  dispatch(push('/'));
};
