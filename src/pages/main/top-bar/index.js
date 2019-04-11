import { connect } from 'react-redux';
import { openNavDrawer } from 'reducers/main/nav-drawer/actions';
import Component from './component';

const handleMenuClick = (dispatch, navDrawerOpen) => () => {
  dispatch(openNavDrawer(!navDrawerOpen));
};

const mapStateToProps = ({
  main: {
    navDrawer: { open },
  },
}) => ({
  navDrawerOpen: open,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const mergeProps = (
  { navDrawerOpen, ...stateProps },
  { dispatch, ...dispatchProps }
) => ({
  ...stateProps,
  ...dispatchProps,
  onMenuClick: handleMenuClick(dispatch, navDrawerOpen),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Component);
