import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('pages/page2'));
const UserProfile = lazy(() => import('pages/user-profile'));

const PageRoutes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/profile" exact component={UserProfile} />
  </Switch>
);

export default PageRoutes;
