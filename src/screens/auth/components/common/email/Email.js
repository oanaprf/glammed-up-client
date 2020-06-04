import React from 'react';
import { Icon } from 'react-native-elements';

import { TextInput } from '@@components';
import { theme } from '@@config';

const Email = props => (
  <TextInput
    {...{
      dark: true,
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
