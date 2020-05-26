import React from 'react';

import { TextInput } from '@@components';
import { t } from '@@config';

const LastName = props => (
  <TextInput
    {...{
      dark: true,
      placeholder: t('signUp.fields.lastName'),
      name: 'lastName',
      ...props,
    }}
  />
);

export default LastName;
