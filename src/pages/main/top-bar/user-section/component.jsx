import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import MenuSurface, { Corner } from 'components/menu-surface';
import List, { ListItem, ListItemText } from 'components/list';

export default class UserSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorElement: null,
      open: false,
    };
    this.setAnchorElement = this.setAnchorElement.bind(this);
    this.onOpenClick = this.onOpenClick.bind(this);
  }

  onOpenClick() {
    const { open } = this.state;
    this.setState({ open: !open });
  }

  setAnchorElement(element) {
    const { anchorElement } = this.state;
    if (anchorElement) {
      return;
    }
    this.setState({ anchorElement: element });
  }

  render() {
    const { displayName, photoURL, onEditProfile } = this.props;
    const { anchorElement, open } = this.state;
    return (
      <div className="top-bar-user-section mdc-menu-surface--anchor">
        <button
          type="button"
          className="top-bar-user-section__clickable-area invisible-button"
          onClick={this.onOpenClick}
        >
          <div className="top-bar-user-section__display-text">
            <span>{displayName}</span>
          </div>
          <img
            className="top-bar-user-section__avatar mdc-menu-surface--anchor"
            src={photoURL}
            alt={`${displayName} Avatar`}
            ref={this.setAnchorElement}
          />
        </button>
        <MenuSurface
          open={open}
          anchorCorner={Corner.BOTTOM_LEFT}
          anchorElement={anchorElement}
          className="top-bar-user-section__menu"
        >
          <List>
            <ListItem onClick={onEditProfile}>
              <ListItemText primaryText="Edit Profile" />
            </ListItem>
            <ListItem onClick={() => {}}>
              <ListItemText primaryText="Sign Out" />
            </ListItem>
          </List>
        </MenuSurface>
      </div>
    );
  }
}

UserSection.propTypes = {
  displayName: PropTypes.string.isRequired,
  photoURL: PropTypes.string.isRequired,
  onEditProfile: PropTypes.func.isRequired,
};
