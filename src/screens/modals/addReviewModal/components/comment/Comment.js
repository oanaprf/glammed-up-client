import React from 'react';
import { Platform } from 'react-native';

import { TextInput } from '@@components';

const Comment = props => (
  <TextInput
    {...{
      dark: true,
      multiline: true,
      ...(Platform.OS === 'ios' ? { minHeight: 20 * 3 } : { numberOfLines: 3 }),
      name: 'comment',
      ...props,
    }}
  />
);

export default Comment;
