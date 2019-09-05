import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core';

import theme from './theme.json';

const ThemeProvider = ({ children }) => (
  <SCThemeProvider theme={theme}>
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      {children}
    </MuiThemeProvider>
  </SCThemeProvider>
);

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
