import React from 'react';
import PropTypes from 'prop-types';
import Drawer, {
  DrawerHeader,
  DrawerSubtitle,
  DrawerTitle,
  DrawerContent,
} from '@material/react-drawer';
import List, { ListItem, ListItemText } from 'components/list';
import './styles.scss';

const NavDrawer = ({ open, onClose, onSignOut, onHome }) => (
  <Drawer open={open} onClose={onClose} modal>
    <DrawerHeader>
      <DrawerTitle tag="h2">Inbox</DrawerTitle>
      <DrawerSubtitle>matt@email.com</DrawerSubtitle>
    </DrawerHeader>
    <DrawerContent>
      <List>
        <ListItem onClick={onHome}>
          <ListItemText primaryText="Home" />
        </ListItem>
        <ListItem onClick={onSignOut}>
          <ListItemText primaryText="Sign Out" />
        </ListItem>
      </List>
    </DrawerContent>
  </Drawer>
);

NavDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSignOut: PropTypes.func.isRequired,
  onHome: PropTypes.func.isRequired,
};

export default NavDrawer;
