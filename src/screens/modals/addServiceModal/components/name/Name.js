import React from 'react';

import { TextInput } from '@@components';

const Name = props => (
  <TextInput
    {...{
      dark: true,
      name: 'name',
      ...props,
    }}
  />
);

export default Name;
