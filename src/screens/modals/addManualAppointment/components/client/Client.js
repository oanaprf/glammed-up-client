import React from 'react';

import { Dropdown } from '@@components';

const Client = props => (
  <Dropdown
    {...{
      name: 'client',
      dark: true,
      maxHeight: 150,
      ...props,
    }}
  />
);

export default Client;
