import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openNavDrawer } from 'reducers/main/nav-drawer/actions';
import { signOut } from 'services/authentication';
import Component from './component';

const handleOnClose = dispatch => () => {
  dispatch(openNavDrawer(false));
};

const handleOnSignOut = (dispatch, ownProps) => async () => {
  console.log(ownProps);
  await signOut();
  // dispatch(push('/sign-in'));
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
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component)
);
