import React from 'react';

import { TextInput } from '@@components';

const LastName = props => (
  <TextInput
    {...{
      dark: true,
      name: 'lastName',
      ...props,
    }}
  />
);

export default LastName;
