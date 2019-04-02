import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'pages/routes';

import './styles.scss';

const App = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default App;
