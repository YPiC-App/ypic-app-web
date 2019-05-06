import { connect } from 'react-redux';
import Form from './form';

const mapStateToProps = ({
  user: { data },
  pages: {
    userProfile: { congregations },
  },
}) => ({
  userData: data,
  congregations,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
