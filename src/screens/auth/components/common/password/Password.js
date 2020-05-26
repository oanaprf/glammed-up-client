import React from 'react';

import { PasswordInput } from '@@components';
import { t } from '@@config';

const Password = props => (
  <PasswordInput
    {...{
      dark: true,
      placeholder: t('login.fields.password'),
      name: 'password',
      ...props,
    }}
  />
);

export default Password;
