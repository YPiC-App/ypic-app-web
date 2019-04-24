import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import LoadingScreen from 'components/loading-screen';

const Home = lazy(() => import('pages/page2'));
const UserProfile = lazy(() => import('pages/user-profile'));

const PageRoutes = () => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/profile" exact component={UserProfile} />
    </Switch>
  </Suspense>
);

export default PageRoutes;
