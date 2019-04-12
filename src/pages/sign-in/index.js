import { connect } from 'react-redux';
import { signInFacebook } from 'services/authentication';
import { push } from 'connected-react-router';
import Component from './component';

const handleOnFacebook = dispatch => async () => {
  await signInFacebook();
  dispatch(push('/'));
};

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({
  onFacebookClick: handleOnFacebook(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
