import React from 'react';
import PropTypes from 'prop-types';
import TextInput from 'components/text-input';
import Button from 'components/button';
import { DatePicker } from 'components/date-picker/index';

const UserProfileForm = ({
  isValid,
  isSubmitting,
  handleSubmit,
  handleChange,
  handleBlur,
}) => (
  <form className="user-profile-form" onSubmit={handleSubmit}>
    <TextInput onChange={handleChange} onBlur={handleBlur} label="Title" />
    <TextInput onChange={handleChange} onBlur={handleBlur} label="First Name" />
    <TextInput onChange={handleChange} onBlur={handleBlur} label="Last Name" />
    <TextInput
      onChange={handleChange}
      onBlur={handleBlur}
      label="Member Number"
    />
    <DatePicker
      onChange={handleChange}
      onBlur={handleBlur}
      label="Date of birth"
      disableFuture
      openTo="year"
      format="dd/MM/yyyy"
      views={['year', 'month', 'day']}
      helperText="Hello"
      clearable
      autoOk
    />
    <TextInput
      onChange={handleChange}
      onBlur={handleBlur}
      label="Congregation"
    />
    <TextInput onChange={handleChange} onBlur={handleBlur} label="Email" />
    <TextInput
      onChange={handleChange}
      onBlur={handleBlur}
      label="Mobile Number"
    />
    <Button
      type="submit"
      className="sign-in-form__sign-in-button"
      raised
      disabled={!isValid || isSubmitting}
    >
      Update Profile
    </Button>
  </form>
);

UserProfileForm.propTypes = {
  isValid: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
};

export default UserProfileForm;
