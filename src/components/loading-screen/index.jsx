import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const LoadingScreen = ({ loadingText }) => (
  <div className="loading-screen">
    <div className="loading-screen__text-container">{loadingText}</div>
  </div>
);

LoadingScreen.defaultProps = {
  loadingText: 'Loading...',
};

LoadingScreen.propTypes = {
  loadingText: PropTypes.string,
};

export default LoadingScreen;
