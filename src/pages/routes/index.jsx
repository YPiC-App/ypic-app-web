import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('pages/page2'));

const Routes = () => (
  <Suspense fallback={<div>Loading a Page...</div>}>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </Suspense>
);

export default Routes;
