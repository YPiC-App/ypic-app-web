import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

const SiteLayout = lazy(() => import('pages/site-layout'));

const Routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Route path="/" component={SiteLayout} />
  </Suspense>
);

export default Routes;
