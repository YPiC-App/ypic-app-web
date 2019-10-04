import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('pages/page1'));
const Page2 = lazy(() => import('pages/page2'));

const Routes = () => (
  <Suspense fallback={<div>Loading a Page...</div>}>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/page2" component={Page2} />
    </Switch>
  </Suspense>
);

export default Routes;
