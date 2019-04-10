import React from 'react';
import PropTypes from 'prop-types';
import Drawer, {
  DrawerHeader,
  DrawerSubtitle,
  DrawerTitle,
  DrawerContent,
} from '@material/react-drawer';

import './styles.scss';

const NavDrawer = ({ open, onClose }) => (
  <Drawer open={open} onClose={onClose} modal>
    <DrawerHeader>
      <DrawerTitle tag="h2">Inbox</DrawerTitle>
      <DrawerSubtitle>matt@email.com</DrawerSubtitle>
    </DrawerHeader>
    <DrawerContent>
      <a href="#">Content</a>
    </DrawerContent>
  </Drawer>
);

NavDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default NavDrawer;
