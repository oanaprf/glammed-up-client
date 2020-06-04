import React from 'react';

import { TextInput } from '@@components';

const Email = props => (
  <TextInput
    {...{
      dark: true,
      name: 'email',
      ...props,
    }}
  />
);

export default Email;
