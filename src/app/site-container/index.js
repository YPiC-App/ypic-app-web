import { connect } from 'react-redux';
import { activateAuthStateListenerAsync } from 'reducers/api/authentication/user-auth-state/thunks';
import component from './component';

const handleOnLoad = dispatch => () => {
  dispatch(activateAuthStateListenerAsync());
};

const mapStateToProps = (
  {
    api: {
      authentication: { getUserAuthState },
    },
    user: { data },
  },
  ownProps
) => ({
  userAuthStateStatus: getUserAuthState.status,
  userData: data,
});

const mapDispatchToProps = dispatch => ({
  onLoad: handleOnLoad(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(component);
