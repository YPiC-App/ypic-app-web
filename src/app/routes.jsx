import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const SignIn = lazy(() => import('pages/sign-in'));

const Routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route path="/" component={SignIn} />
    </Switch>
  </Suspense>
);

export default Routes;
