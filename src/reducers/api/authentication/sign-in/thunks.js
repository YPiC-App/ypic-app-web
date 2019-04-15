import { signInFacebook, signInGoogle } from 'services/authentication';
import { showSiteOverlay } from 'reducers/site/actions';
import { handleSignInAuhtError } from './utils';

export const signInFacebookAsync = push => async dispatch => {
  try {
    dispatch(showSiteOverlay(true, 'Signing in with Facebook..'));
    const result = await signInFacebook();
    console.log(result);
    push('/');
  } catch (error) {
    handleSignInAuhtError(error);
  } finally {
    dispatch(showSiteOverlay(false));
  }
};

export const signInGoogleAsync = push => async dispatch => {
  try {
    dispatch(showSiteOverlay(true, 'Signing in with Google..'));
    const result = await signInGoogle();
    console.log(result);
    push('/');
    dispatch(showSiteOverlay(false));
  } catch (error) {
    handleSignInAuhtError(error);
  } finally {
    dispatch(showSiteOverlay(false));
  }
};
