import React from 'react';
import Button from 'components/button';

const ProfileImageManager = () => (
  <div>
    <img
      src="https://lh3.googleusercontent.com/-p1SFC99hIb8/AAAAAAAAAAI/AAAAAAAAAWQ/a9Io1lQ2B3Q/photo.jpg"
      alt="My Profile Pic"
    />
    <div>
      <Button raised>Upload</Button>
    </div>
  </div>
);

export default ProfileImageManager;
