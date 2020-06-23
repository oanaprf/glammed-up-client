import React from 'react';

import { Dropdown } from '@@components';

const Time = props => (
  <Dropdown
    {...{
      name: 'time',
      dark: true,
      maxHeight: 150,
      ...props,
    }}
  />
);

export default Time;
