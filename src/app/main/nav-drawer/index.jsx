import React from 'react';
import Drawer, {
  DrawerHeader,
  DrawerSubtitle,
  DrawerTitle,
  DrawerContent,
} from '@material/react-drawer';

import './styles.scss';

const NavDrawer = () => (
  <Drawer open modal onClose={() => console.log('closing')}>
    <DrawerHeader>
      <DrawerTitle tag="h2">Inbox</DrawerTitle>
      <DrawerSubtitle>matt@email.com</DrawerSubtitle>
    </DrawerHeader>
    <DrawerContent>Content</DrawerContent>
  </Drawer>
);

export default NavDrawer;
