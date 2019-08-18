import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from 'components/private-route';
import { isNullOrUndefined } from 'util';

const SignIn = lazy(() => import('pages/sign-in'));
const Main = lazy(() => import('pages/main'));

const Routes = ({ userData }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <PrivateRoute
        path="/"
        exact
        component={Main}
        isAuthed={!isNullOrUndefined(userData)}
        redirectPath="/sign-in"
      />
      <Route path="/sign-in" component={SignIn} />
    </Switch>
  </Suspense>
);

Routes.defaultProps = {
  userData: undefined,
};

Routes.propTypes = {
  userData: PropTypes.shape(),
};

export default Routes;
