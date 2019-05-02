import { connect } from 'react-redux';
import Component from './component';

const handleOnLoad = dispatch => () => {};

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({
  onLoad: handleOnLoad(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
