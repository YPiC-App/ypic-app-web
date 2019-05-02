import React from 'react';
import PropTypes from 'prop-types';
import Lifecycler from 'lifecycler';
import Form from './form';
import './styles.scss';
import ProfileImageManager from './profile-image-manager';

const UserProfile = ({ onLoad }) => (
  <Lifecycler componentDidMount={onLoad}>
    <div className="user-profile">
      <ProfileImageManager />
      <Form />
    </div>
  </Lifecycler>
);

UserProfile.propTypes = {
  onLoad: PropTypes.func.isRequired,
};

export default UserProfile;
