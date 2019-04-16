// See: https://github.com/material-components/material-components-web-react/tree/rc0.12.0/packages/text-field
import React from 'react';
import PropTypes from 'prop-types';
import TextField, { Input, HelperText } from '@material/react-text-field';

import './styles.scss';

const TextInput = ({
  label,
  hideHelperText,
  helperText,
  trailingIcon,
  onTrailingIconSelect,
  ...props
}) => (
  <TextField
    label={label}
    trailingIcon={trailingIcon}
    onTrailingIconSelect={onTrailingIconSelect}
    helperText={!hideHelperText && <HelperText>{helperText}</HelperText>}
  >
    <Input {...props} />
  </TextField>
);

TextInput.defaultProps = {
  value: '',
  helperText: '',
  hideHelperText: false,
  type: 'input',
  onChange: () => {},
  trailingIcon: undefined,
  onTrailingIconSelect: undefined,
};

TextInput.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  helperText: PropTypes.string,
  hideHelperText: PropTypes.bool,
  type: PropTypes.string,
  onChange: PropTypes.func,
  trailingIcon: PropTypes.node,
  onTrailingIconSelect: PropTypes.func,
};

export default TextInput;
