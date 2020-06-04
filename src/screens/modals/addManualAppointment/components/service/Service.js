import React from 'react';

import { Dropdown } from '@@components';

const Service = props => (
  <Dropdown
    {...{
      name: 'service',
      dark: true,
      maxHeight: 150,
      options: [
        { key: '123', value: 'Unghii cu gel' },
        { key: '1234', value: 'Unghii semi' },
        { key: '1235', value: 'Unghii acrilice' },
      ],
      ...props,
    }}
  />
);

export default Service;
