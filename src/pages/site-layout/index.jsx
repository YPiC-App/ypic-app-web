import React from 'react';
import styled from 'styled-components';
import Routes from 'pages/routes';
import AppBar from './app-bar';

const StyledSiteLayout = styled.div``;

const SignIn = () => (
  <StyledSiteLayout>
    <AppBar />
    <Routes />
  </StyledSiteLayout>
);

export default SignIn;
