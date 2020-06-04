import React from 'react';

import { TextInput } from '@@components';

const FirstName = props => (
  <TextInput
    {...{
      dark: true,
      name: 'firstName',
      ...props,
    }}
  />
);

export default FirstName;
