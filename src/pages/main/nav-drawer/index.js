import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openNavDrawer } from 'reducers/main/nav-drawer/actions';
import { signOutAsync } from 'reducers/api/authentication/sign-in/thunks';
import Component from './component';

const handleOnClose = dispatch => () => {
  dispatch(openNavDrawer(false));
};

const handleOnSignOut = (dispatch, { history: { push } }) => async () => {
  push('/sign-in');
  dispatch(signOutAsync());
};

const handleOnHome = ({ history: { push } }) => () => {
  push('/');
};

const mapStateToProps = ({
  main: {
    navDrawer: { open },
  },
}) => ({
  open,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClose: handleOnClose(dispatch),
  onSignOut: handleOnSignOut(dispatch, ownProps),
  onHome: handleOnHome(ownProps),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component)
);
