import React from 'react';

import { PasswordInput } from '@@components';

const Password = props => (
  <PasswordInput
    {...{
      dark: true,
      name: 'password',
      ...props,
    }}
  />
);

export default Password;
