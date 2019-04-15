import React from 'react';
import PropTypes from 'prop-types';
import TextInput from 'components/text-input';
import Button from 'components/button';

import './styles.scss';

const SignInForm = ({ values, handleChange, handleBlur, handleSubmit }) => (
  <form className="sign-in-form" onSubmit={handleSubmit}>
    <TextInput
      value={values.email}
      onChange={handleChange}
      onBlur={handleBlur}
      label="Email"
      id="email"
    />
    <TextInput
      value={values.password}
      onChange={handleChange}
      onBlur={handleBlur}
      label="Password"
      type="password"
      id="password"
    />
    <div className="sign-in-form__button-container">
      <Button type="submit" className="sign-in-form__sign-in-button" raised>
        Sign In
      </Button>
      <Button
        type="button"
        raised
        disabled
        className="sign-in-form__email-button"
      >
        Register / Forgot Password
      </Button>
    </div>
  </form>
);

SignInForm.propTypes = {
  values: PropTypes.shape().isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SignInForm;
