import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from 'reducers/store';
import SiteContainer from './site-container';
import 'styles/global.scss';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <BrowserRouter>
        <SiteContainer />
      </BrowserRouter>
    </ConnectedRouter>
  </Provider>
);

export default App;
