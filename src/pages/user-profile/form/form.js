import { withFormik } from 'formik';
import { object, string } from 'yup';

import Component from './component';

const validationSchema = object().shape({
  email: string()
    .email('Invalid Email')
    .required('Required'),
});

const handleSubmit = (values, { setSubmitting }) => {
  setSubmitting(false);
};

const mapPropsToValues = ({
  userData: {
    title,
    email,
    firstName,
    lastName,
    memberNumber,
    dob,
    cellNumber,
  },
}) => ({
  title,
  dob: dob || null,
  email,
  firstName,
  lastName,
  memberNumber,
  cellNumber,
});

export default withFormik({ handleSubmit, validationSchema, mapPropsToValues })(
  Component
);
