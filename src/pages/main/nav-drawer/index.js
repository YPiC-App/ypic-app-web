import { connect } from 'react-redux';
import { openNavDrawer } from 'reducers/main/nav-drawer/actions';
import Component from './component';

const handleOnClose = dispatch => () => {
  dispatch(openNavDrawer(false));
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
