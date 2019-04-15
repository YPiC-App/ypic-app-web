import { signInFacebook, signInGoogle } from 'services/authentication';
import { showSiteOverlay } from 'reducers/site/actions';

// eslint-disable-next-line
export const signInFacebookAsync = push => async dispatch => {
  dispatch(showSiteOverlay(true, 'Signing in with Facebook..'));
  const result = await signInFacebook();
  console.log(result);
  push('/');
  dispatch(showSiteOverlay(false));
};

export const signInGoogleAsync = push => async dispatch => {
  dispatch(showSiteOverlay(true, 'Signing in with Google..'));
  const result = await signInGoogle();
  console.log(result);
  push('/');
  dispatch(showSiteOverlay(false));
};
