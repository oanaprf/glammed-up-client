import React from 'react';
import getOr from 'lodash/fp/getOr';

import { Dropdown } from '@@components';

const Service = props => (
  <Dropdown
    {...{
      name: 'service',
      dark: true,
      maxHeight: 150,
      value: getOr('', 'options.0.key', props),
      ...props,
    }}
  />
);

export default Service;
