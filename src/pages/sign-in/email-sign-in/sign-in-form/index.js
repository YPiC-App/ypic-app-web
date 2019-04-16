import { connect } from 'react-redux';
import { setShowPassword } from 'reducers/pages/sign-in/actions';
import Form from './form';

const handleShowPassword = (dispatch, showPassword) => () => {
  dispatch(setShowPassword(!showPassword));
};

const mapStateToProps = ({
  pages: {
    signIn: { showPassword },
  },
}) => ({
  showPassword,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
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
