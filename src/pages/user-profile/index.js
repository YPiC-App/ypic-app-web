import { connect } from 'react-redux';
import { getCongregations } from 'services/congregation-info';
import Component from './component';

const handleOnLoad = dispatch => async () => {
  console.log(await getCongregations());
};

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({
  onLoad: handleOnLoad(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
