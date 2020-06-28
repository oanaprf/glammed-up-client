import React from 'react';
import { Platform } from 'react-native';
import PropTypes from 'prop-types';

import { TextInput } from '@@components';

const Comment = props => (
  <TextInput
    {...{
      dark: true,
      multiline: true,
      ...(Platform.OS === 'ios' ? { minHeight: 20 * 3 } : { numberOfLines: 3 }),
      name: 'comment',
      error: props.submitting && !props.value,
      ...props,
    }}
  />
);

Comment.propTypes = {
  submitting: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default Comment;
