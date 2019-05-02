import { connect } from 'react-redux';
import Form from './form';

const mapStateToProps = ({ user: { data } }) => ({
  userData: data,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
