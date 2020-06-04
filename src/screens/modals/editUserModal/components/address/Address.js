import React from 'react';

import { TextInput } from '@@components';

const Address = props => (
  <TextInput
    {...{
      dark: true,
      multiline: true,
      numberOfLines: 2,
      name: 'address',
      ...props,
    }}
  />
);

export default Address;
