import React from 'react';
import PropTypes from 'prop-types';
import Lifecycler from 'lifecycler';
import Preloadr from 'react-preloadr';
import Routes from 'app/routes';
import LoadingScreen from 'components/loading-screen/index';

const SiteContainer = ({
  userAuthStateStatus,
  userData,
  showOverlay,
  overlayText,
  onLoad,
}) => (
  <Lifecycler componentDidMount={onLoad}>
    <Preloadr
      requested={() => <LoadingScreen loadingText="Checking Auth State.." />}
      status={userAuthStateStatus}
    >
      {() => <Routes userData={userData} />}
    </Preloadr>
    {showOverlay && <LoadingScreen loadingText={overlayText} />}
  </Lifecycler>
);

SiteContainer.defaultProps = {
  userData: undefined,
};

SiteContainer.propTypes = {
  onLoad: PropTypes.func.isRequired,
  userAuthStateStatus: PropTypes.string.isRequired,
  showOverlay: PropTypes.bool.isRequired,
  overlayText: PropTypes.string.isRequired,
  userData: PropTypes.shape(),
};

export default SiteContainer;
