import React from 'react';
import styled from 'styled-components';
import MuiAppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Tabs, Tab } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LogoSection from './LogoSection';

const AppBarLayout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0.8rem;
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

const AppBar = () => {
  const scrolled = useScrollTrigger({ disableHysteresis: true });

  // TODO: Rework to use path to Highlight correct tab
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MuiAppBar elevation={scrolled ? 4 : 0}>
      <AppBarLayout>
        <FlexDiv>
          <div>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <LogoSection />
          </div>
          <div>
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Page 1" value="/" />
              <Tab label="Page 2" value="Page2" />
              <Tab label="Page 3" value="Page3" />
            </Tabs>
          </div>
        </FlexDiv>
        <div>
          <button type="button">Sign In</button>
        </div>
      </AppBarLayout>
    </MuiAppBar>
  );
};

export default AppBar;
