// https://material-ui-pickers.dev/
import React from 'react';
import PropTypes from 'prop-types';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
// import { createMuiTheme } from '@material-ui/core';
// import { ThemeProvider } from '@material-ui/styles';

import './styles.scss';

export { DatePicker } from 'material-ui-pickers';

export const DatePickerUtilProvider = ({ children }) => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    {children}
  </MuiPickersUtilsProvider>
);

DatePickerUtilProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
