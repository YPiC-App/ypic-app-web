import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from 'styles/GlobalStyles';
import Routes from './routes';

const App = () => (
  <BrowserRouter>
    <>
      <GlobalStyles />
      <Routes />
    </>
  </BrowserRouter>
);

export default App;
