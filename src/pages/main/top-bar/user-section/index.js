import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import component from './component';

const handleEditProfile = push => () => {
  push('/profile');
};

const mapStateToProps = ({
  user: {
    data: { displayName, photoURL },
  },
}) => ({ displayName, photoURL });

const mapDispatchToProps = (dispatch, { history: { push } }) => ({
  onEditProfile: handleEditProfile(push),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(component)
);
