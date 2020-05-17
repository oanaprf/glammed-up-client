import React from 'react';
import { Icon } from 'react-native-elements';

import { TextInput } from '@@components';
import { theme, t } from '@@config';

const Email = props => (
  <TextInput
    {...{
      dark: true,
      placeholder: t('login.fields.email'),
      name: 'email',
      ...props,
    }}
    Icon={
      <Icon
        {...{
          name: 'mail',
          type: 'feather',
          size: 20,
          color: theme.colors.grey,
        }}
      />
    }
  />
);

export default Email;
