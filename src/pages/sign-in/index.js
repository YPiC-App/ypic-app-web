import { connect } from 'react-redux';
import {
  signInFacebookAsync,
  signInGoogleAsync,
} from 'reducers/api/authentication/sign-in/thunks';
import Component from './component';

const handleOnFacebook = (dispatch, { history: { push } }) => async () => {
  dispatch(signInFacebookAsync(push));
};

const handleOnGoogle = (dispatch, { history: { push } }) => async () => {
  dispatch(signInGoogleAsync(push));
};

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onFacebookClick: handleOnFacebook(dispatch, ownProps),
  onGoogleClick: handleOnGoogle(dispatch, ownProps),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
