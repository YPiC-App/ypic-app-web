import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  component: Component,
  isAuthed,
  redirectPath,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthed ? <Component {...props} /> : <Redirect to={redirectPath} />
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired,
  isAuthed: PropTypes.bool.isRequired,
  redirectPath: PropTypes.string.isRequired,
};

export default PrivateRoute;
