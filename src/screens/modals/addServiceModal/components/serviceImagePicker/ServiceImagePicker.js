import React from 'react';

import { ImagePicker } from '@@components';

const ServiceImagePicker = props => (
  <ImagePicker
    {...{
      name: 'pictures',
      ...props,
    }}
  />
);

export default ServiceImagePicker;
