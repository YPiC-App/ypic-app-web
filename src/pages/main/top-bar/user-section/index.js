import { connect } from 'react-redux';
import { setMenuAnchorElement } from 'reducers/main/top-bar/user-section/actions';
import component from './component';

const handleAncorElement = dispatch => element => {
  dispatch(setMenuAnchorElement(element));
};

const mapStateToProps = ({
  user: {
    data: { displayName, photoURL },
  },
  main: {
    topBar: {
      userSection: { menuAnchorElement },
    },
  },
}) => ({ displayName, photoURL, anchorElement: menuAnchorElement });

const mapDispatchToProps = dispatch => ({
  setAnchorElement: handleAncorElement(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(component);
