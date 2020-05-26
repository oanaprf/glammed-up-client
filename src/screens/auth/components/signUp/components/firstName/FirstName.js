import React from 'react';

import { TextInput } from '@@components';
import { t } from '@@config';

const FirstName = props => (
  <TextInput
    {...{
      dark: true,
      placeholder: t('signUp.fields.firstName'),
      name: 'firstName',
      ...props,
    }}
  />
);

export default FirstName;
