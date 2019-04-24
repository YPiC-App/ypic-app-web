import React, { Fragment } from 'react';
import { DrawerAppContent } from '@material/react-drawer';
import { TopAppBarFixedAdjust } from '@material/react-top-app-bar';
import TopBar from './top-bar';
import NavDrawer from './nav-drawer';
import PageRoutes from './page-routes';

const Main = () => (
  <Fragment>
    <TopBar />
    <NavDrawer />
    <DrawerAppContent>
      <TopAppBarFixedAdjust>
        <PageRoutes />
      </TopAppBarFixedAdjust>
    </DrawerAppContent>
  </Fragment>
);

export default Main;
