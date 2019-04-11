import React from 'react';
import PropTypes from 'prop-types';
import Lifecycler from 'lifecycler';
import Preloadr from 'react-preloadr';
import Routes from 'app/routes';

const SiteContainer = ({ userAuthStateStatus, onLoad }) => (
  <Lifecycler componentDidMount={onLoad}>
    <Preloadr
      requested={() => <div>Busy Checking User Status!!!</div>}
      status={userAuthStateStatus}
    >
      {() => <Routes />}
    </Preloadr>
  </Lifecycler>
);

SiteContainer.propTypes = {
  onLoad: PropTypes.func.isRequired,
  userAuthStateStatus: PropTypes.string.isRequired,
};

export default SiteContainer;
