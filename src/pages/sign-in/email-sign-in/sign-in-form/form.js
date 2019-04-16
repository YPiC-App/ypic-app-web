import { withFormik } from 'formik';
import { object, string } from 'yup';
import Component from './component';

const validationSchema = object().shape({
  email: string()
    .email('Invalid Email')
    .required('Required'),
  password: string().required('Required'),
});

const handleSubmit = (values, { props: { onSignIn }, setSubmitting }) => {
  onSignIn(values);
  setSubmitting(false);
};

export default withFormik({ handleSubmit, validationSchema })(Component);
