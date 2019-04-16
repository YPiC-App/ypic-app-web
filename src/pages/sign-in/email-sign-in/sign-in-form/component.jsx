import React from 'react';
import PropTypes from 'prop-types';
import TextInput from 'components/text-input';
import Button from 'components/button';
import { EyeOffIcon, EyeIcon } from 'components/icons';
import './styles.scss';

const SignInForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  isValid,
  isSubmitting,
  errors,
  showPassword,
  onShowPasswordClick,
}) => (
  <form className="sign-in-form" onSubmit={handleSubmit}>
    <TextInput
      value={values.email}
      onChange={handleChange}
      onBlur={handleBlur}
      helperText={errors.email}
      isValid={!errors.email}
      label="Email"
      id="email"
      autoComplete="username"
    />
    <TextInput
      value={values.password}
      onChange={handleChange}
      onBlur={handleBlur}
      helperText={errors.password}
      isValid={!errors.password}
      label="Password"
      type={showPassword ? 'text' : 'password'}
      id="password"
      autoComplete="current-password"
      trailingIcon={showPassword ? <EyeOffIcon /> : <EyeIcon />}
      onTrailingIconSelect={onShowPasswordClick}
    />
    <div className="sign-in-form__button-container">
      <Button
        type="submit"
        className="sign-in-form__sign-in-button"
        raised
        disabled={!isValid || isSubmitting}
      >
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
  isValid: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  errors: PropTypes.shape().isRequired,
  showPassword: PropTypes.bool.isRequired,
  onShowPasswordClick: PropTypes.func.isRequired,
};

export default SignInForm;
