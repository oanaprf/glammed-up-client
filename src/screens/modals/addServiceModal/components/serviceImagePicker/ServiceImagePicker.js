import React from 'react';

import { ImagePicker } from '@@components';

const ServiceImagePicker = props => (
  <ImagePicker
    {...{
      name: 'pictures',
      multiple: true,
      ...props,
    }}
  />
);

export default ServiceImagePicker;
