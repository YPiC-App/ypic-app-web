import React from 'react';
import PropTypes from 'prop-types';
import Form from './form';
import './styles.scss';
import ProfileImageManager from './profile-image-manager';

const UserProfile = () => (
  <div className="user-profile">
    <ProfileImageManager />
    <Form />
  </div>
);

export default UserProfile;
