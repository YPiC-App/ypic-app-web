import React from 'react';
import styled from 'styled-components';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Tabs, Tab } from '@material-ui/core';

const StyledNavList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
`;

const StyledNavItem = styled.li`
  padding: 0 0.3rem;
`;

const FlexDiv = styled.div`
  display: flex;
`;

const AppBar = () => {
  const scrolled = useScrollTrigger({ disableHysteresis: true });
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <MuiAppBar elevation={scrolled ? 4 : 0}>
      <FlexDiv>
        <div>Sup fuckers!</div>
        <div>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Page 1" value="/" />
            <Tab label="Page 2" value="Page2" />
            <Tab label="Page 3" value="Page3" />
          </Tabs>
        </div>
      </FlexDiv>
    </MuiAppBar>
  );
};

export default AppBar;
