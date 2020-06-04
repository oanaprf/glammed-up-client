import React from 'react';

import { Dropdown } from '@@components';

const Client = props => (
  <Dropdown
    {...{
      name: 'client',
      dark: true,
      maxHeight: 150,
      options: [
        { key: '123', value: 'Maria Popescu' },
        { key: '1234', value: 'Andra Radu' },
      ],
      ...props,
    }}
  />
);

export default Client;
