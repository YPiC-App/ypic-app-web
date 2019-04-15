import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'reducers/store';
import SiteContainer from './site-container';
import 'styles/global.scss';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <SiteContainer />
    </BrowserRouter>
  </Provider>
);

export default App;
