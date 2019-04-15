import React from 'react';
import PropTypes from 'prop-types';
import TextField, { Input, HelperText } from '@material/react-text-field';

import './styles.scss';

const TextInput = ({ value, label, helperText, onChange, ...props }) => (
  <TextField label={label} helperText={<HelperText>{helperText}</HelperText>}>
    <Input value={value} onChange={onChange} {...props} />
  </TextField>
);

TextInput.defaultProps = {
  value: '',
  helperText: '',
  type: 'input',
  onChange: () => {},
};

TextInput.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  helperText: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextInput;
