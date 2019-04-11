import { connect } from 'react-redux';
import { signInFacebook } from 'services/authentication';
import Component from './component';

const handleOnFacebook = dispatch => () => {
  signInFacebook();
};

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({
  onFacebookClick: handleOnFacebook(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
