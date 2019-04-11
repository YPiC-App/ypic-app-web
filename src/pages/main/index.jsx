import React from 'react';
import { DrawerAppContent } from '@material/react-drawer';
import TopBar from './top-bar';
import NavDrawer from './nav-drawer';

const Main = () => (
  <div>
    <NavDrawer />
    <DrawerAppContent>
      <TopBar />
      Content
    </DrawerAppContent>
  </div>
);

export default Main;
