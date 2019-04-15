import { connect } from 'react-redux';
import { activateAuthStateListenerAsync } from 'reducers/api/authentication/user-auth-state/thunks';
import component from './component';

const handleOnLoad = dispatch => () => {
  dispatch(activateAuthStateListenerAsync());
};

const mapStateToProps = ({
  api: {
    authentication: { getUserAuthState },
  },
  user: { data },
  site: { showOverlay, overlayText },
}) => ({
  userAuthStateStatus: getUserAuthState.status,
  userData: data,
  showOverlay,
  overlayText,
});

const mapDispatchToProps = dispatch => ({
  onLoad: handleOnLoad(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(component);
