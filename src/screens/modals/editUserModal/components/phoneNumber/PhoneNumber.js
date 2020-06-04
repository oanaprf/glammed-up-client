import React from 'react';

import { TextInput } from '@@components';

const PhoneNumber = props => (
  <TextInput
    {...{
      dark: true,
      name: 'phoneNumber',
      ...props,
    }}
  />
);

export default PhoneNumber;
