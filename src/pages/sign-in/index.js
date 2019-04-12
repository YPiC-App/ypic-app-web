import { connect } from 'react-redux';
import { signInFacebookAsync } from 'reducers/api/authentication/sign-in/thunks';
import Component from './component';

const handleOnFacebook = dispatch => async () => {
  dispatch(signInFacebookAsync());
};

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({
  onFacebookClick: handleOnFacebook(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
