import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { openNavDrawer } from 'reducers/main/nav-drawer/actions';
import { signOut } from 'services/authentication';
import Component from './component';

const handleOnClose = dispatch => () => {
  dispatch(openNavDrawer(false));
};

const handleOnSignOut = dispatch => async () => {
  await signOut();
  dispatch(push('/sign-in'));
};

const mapStateToProps = ({
  main: {
    navDrawer: { open },
  },
}) => ({
  open,
});

const mapDispatchToProps = dispatch => ({
  onClose: handleOnClose(dispatch),
  onSignOut: handleOnSignOut(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
