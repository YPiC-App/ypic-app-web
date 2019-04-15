import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('pages/page2'));

const PageRoutes = () => (
  <Switch>
    <Route path="/" component={Home} />
  </Switch>
);

export default PageRoutes;
