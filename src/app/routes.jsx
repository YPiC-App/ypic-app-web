import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import PrivateRoute from 'components/private-route';
import { isNullOrUndefined } from 'util';
import LoadingScreen from 'components/loading-screen';

const SignIn = lazy(() => import('pages/sign-in'));
const Main = lazy(() => import('pages/main'));

const Routes = ({ userData }) => (
  <Suspense fallback={<LoadingScreen />}>
    <PrivateRoute
      path="/"
      exact
      component={Main}
      isAuthed={!isNullOrUndefined(userData)}
      redirectPath="/sign-in"
    />
    <Route path="/sign-in" component={SignIn} />
  </Suspense>
);

Routes.defaultProps = {
  userData: undefined,
};

Routes.propTypes = {
  userData: PropTypes.shape(),
};

export default Routes;
