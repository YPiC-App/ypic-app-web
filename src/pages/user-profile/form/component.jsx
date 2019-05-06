import React from 'react';
import PropTypes from 'prop-types';
import TextInput from 'components/text-input';
import Button from 'components/button';
import { DatePicker } from 'components/date-picker';
import Select, { Option } from 'components/select';

const UserProfileForm = ({
  isValid,
  isSubmitting,
  handleSubmit,
  handleChange,
  handleBlur,
  setFieldValue,
  values,
  congregations,
}) => (
  <form className="user-profile-form" onSubmit={handleSubmit}>
    <TextInput
      name="title"
      value={values.title}
      onChange={handleChange}
      onBlur={handleBlur}
      label="Title"
    />
    <TextInput
      name="firstName"
      value={values.firstName}
      onChange={handleChange}
      onBlur={handleBlur}
      label="First Name"
    />
    <TextInput
      name="lastName"
      value={values.lastName}
      onChange={handleChange}
      onBlur={handleBlur}
      label="Last Name"
    />
    <TextInput
      name="memberNumber"
      value={values.memberNumber}
      onChange={handleChange}
      onBlur={handleBlur}
      label="Member Number"
    />
    <DatePicker
      name="dob"
      value={values.dob}
      onChange={date => setFieldValue('dob', date, true)}
      onBlur={handleBlur}
      label="Date of birth"
      disableFuture
      openTo="year"
      format="dd/MM/yyyy"
      views={['year', 'month', 'day']}
      clearable
      autoOk
    />
    {/* <Select>
      {congregations.map(cong => (<Option>{cong}</Option>))}
    </Select> */}
    <TextInput
      name="email"
      value={values.email}
      onChange={handleChange}
      onBlur={handleBlur}
      label="Email"
    />
    <TextInput
      name="cellNumber"
      value={values.cellNumber}
      onChange={handleChange}
      onBlur={handleBlur}
      label="Cell Number"
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
  setFieldValue: PropTypes.func.isRequired,
  values: PropTypes.shape().isRequired,
};

export default UserProfileForm;
