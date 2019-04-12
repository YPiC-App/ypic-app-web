import React from 'react';
import PropTypes from 'prop-types';
import Lifecycler from 'lifecycler';
import Preloadr from 'react-preloadr';
import Routes from 'app/routes';

const SiteContainer = ({ userAuthStateStatus, userData, onLoad }) => (
  <Lifecycler componentDidMount={onLoad}>
    <Preloadr
      requested={() => <div>Busy Checking User Status!!!</div>}
      status={userAuthStateStatus}
    >
      {() => <Routes userData={userData} />}
    </Preloadr>
  </Lifecycler>
);

SiteContainer.defaultProps = {
  userData: undefined,
};

SiteContainer.propTypes = {
  onLoad: PropTypes.func.isRequired,
  userAuthStateStatus: PropTypes.string.isRequired,
  userData: PropTypes.shape(),
};

export default SiteContainer;
