import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import 'styles/styles.scss';

const App = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default App;
