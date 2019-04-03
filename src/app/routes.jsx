import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Page1 from 'pages/page1';
import Page2 from 'pages/page2';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Page1} />
    <Route path="/page2" component={Page2} />
  </Switch>
);

export default Routes;
