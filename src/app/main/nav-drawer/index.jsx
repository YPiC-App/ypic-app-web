import React from 'react';
import Drawer, {
  DrawerHeader,
  DrawerSubtitle,
  DrawerTitle,
  DrawerContent,
} from '@material/react-drawer';

import './styles.scss';

const NavDrawer = () => (
  <Drawer open modal dismissible>
    <DrawerHeader>
      <DrawerTitle tag="h2">Inbox</DrawerTitle>
      <DrawerSubtitle>matt@email.com</DrawerSubtitle>
    </DrawerHeader>
    <DrawerContent>content</DrawerContent>
  </Drawer>
);

export default NavDrawer;
