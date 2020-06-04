import React from 'react';
import { Platform } from 'react-native';

import { TextInput } from '@@components';

const Address = props => (
  <TextInput
    {...{
      dark: true,
      multiline: true,
      ...(Platform.OS === 'ios' ? { minHeight: 20 * 2 } : { numberOfLines: 2 }),
      name: 'address',
      ...props,
    }}
  />
);

export default Address;
