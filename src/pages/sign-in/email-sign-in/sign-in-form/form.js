import { withFormik } from 'formik';
import Component from './component';

const handleSubmit = (values, formikBag) => {
  console.log(values, formikBag);
};

export default withFormik({ handleSubmit })(Component);
