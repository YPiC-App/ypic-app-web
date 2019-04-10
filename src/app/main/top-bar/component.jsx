import React from 'react';
import PropTypes from 'prop-types';

import TopAppBar, {
  TopAppBarTitle,
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
} from '@material/react-top-app-bar'; // TopAppBarTitle, // TopAppBarSection, // TopAppBarRow, // TopAppBarIcon, // TopAppBarFixedAdjust,
import MaterialIcon from '@material/react-material-icon';

import './styles.scss';

const TopBar = ({ onMenuClick }) => (
  <TopAppBar dense>
    <TopAppBarRow>
      <TopAppBarSection align="start">
        <TopAppBarIcon navIcon tabIndex={0}>
          <MaterialIcon hasRipple icon="menu" onClick={onMenuClick} />
        </TopAppBarIcon>
        <TopAppBarTitle>Some Text</TopAppBarTitle>
      </TopAppBarSection>
    </TopAppBarRow>
  </TopAppBar>
);

TopBar.propTypes = {
  onMenuClick: PropTypes.func.isRequired,
};

export default TopBar;
