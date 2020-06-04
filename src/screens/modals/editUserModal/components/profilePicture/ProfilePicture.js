import React from 'react';

import { ImagePicker } from '@@components';

const ProfilePicture = props => (
  <ImagePicker
    {...{
      name: 'profilePicture',
      ...props,
    }}
  />
);

export default ProfilePicture;
