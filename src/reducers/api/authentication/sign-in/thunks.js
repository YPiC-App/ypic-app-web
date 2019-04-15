import { signInFacebook, signInGoogle } from 'services/authentication';
import { showSiteOverlay } from 'reducers/site/actions';
import { toast } from 'react-toastify';

// eslint-disable-next-line
export const signInFacebookAsync = push => async dispatch => {
  try {
    dispatch(showSiteOverlay(true, 'Signing in with Facebook..'));
    const result = await signInFacebook();
    console.log(result);
    push('/');
  } catch (error) {
    console.log(error);
    toast.error(error.message);
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
    toast.error(error.message);
  } finally {
    dispatch(showSiteOverlay(false));
  }
};
