import React from 'react';

import { Dropdown } from '@@components';

const Time = props => (
  <Dropdown
    {...{
      name: 'time',
      dark: true,
      maxHeight: 150,
      options: [
        { key: '10:30', value: '10:30' },
        { key: '14:30', value: '14:30' },
        { key: '15:30', value: '15:30' },
      ],
      ...props,
    }}
  />
);

export default Time;
