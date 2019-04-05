import React from 'react';
import TopAppBar, {
  TopAppBarTitle,
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
} from '@material/react-top-app-bar'; // TopAppBarTitle, // TopAppBarSection, // TopAppBarRow, // TopAppBarIcon, // TopAppBarFixedAdjust,
import MaterialIcon from '@material/react-material-icon';

import './styles.scss';

const TopBar = () => (
  <TopAppBar dense>
    <TopAppBarRow>
      <TopAppBarSection align="start">
        <TopAppBarIcon navIcon tabIndex={0}>
          <MaterialIcon
            hasRipple
            icon="menu"
            onClick={() => console.log('click')}
          />
        </TopAppBarIcon>
        <TopAppBarTitle>Some Text</TopAppBarTitle>
      </TopAppBarSection>
    </TopAppBarRow>
  </TopAppBar>
);

export default TopBar;
