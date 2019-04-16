import { connect } from 'react-redux';
import { setShowPassword } from 'reducers/pages/sign-in/actions';
import { signInEmailAsync } from 'reducers/api/authentication/sign-in/thunks';
import Form from './form';

const handleShowPassword = (dispatch, showPassword) => () => {
  dispatch(setShowPassword(!showPassword));
};

const handleOnSignIn = (dispatch, push) => ({ email, password }) => {
  dispatch(signInEmailAsync(email, password, push));
};

const mapStateToProps = ({
  pages: {
    signIn: { showPassword },
  },
}) => ({
  showPassword,
});

const mapDispatchToProps = (dispatch, { push }) => ({
  dispatch,
  onSignIn: handleOnSignIn(dispatch, push),
});

const mergeProps = (stateProps, { dispatch, ...dispatchProps }) => ({
  ...stateProps,
  ...dispatchProps,
  onShowPasswordClick: handleShowPassword(dispatch, stateProps.showPassword),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Form);
