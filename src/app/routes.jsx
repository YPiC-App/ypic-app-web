import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const SignIn = lazy(() => import('pages/sign-in'));
const Main = lazy(() => import('pages/main'));

const Routes = ({ userData }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/sign-in" component={SignIn} />
    </Switch>
  </Suspense>
);

export default Routes;
