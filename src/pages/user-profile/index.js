import { connect } from 'react-redux';
import { setupUserProfile } from 'reducers/pages/user-profile/thunks';
import Component from './component';

const handleOnLoad = (dispatch, uid) => () => {
  dispatch(setupUserProfile(uid));
};

const mapStateToProps = ({ user: { data } }) => ({
  uid: data.uid,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const mergeProps = (
  { uid, ...stateProps },
  { dispatch, ...dispatchProps }
) => ({
  ...stateProps,
  ...dispatchProps,
  onLoad: handleOnLoad(dispatch, uid),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Component);
