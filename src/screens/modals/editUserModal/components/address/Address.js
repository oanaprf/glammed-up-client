import React from 'react';
import { Platform } from 'react-native';
import PropTypes from 'prop-types';

import { TextInput } from '@@components';

const Address = props => (
  <TextInput
    {...{
      dark: true,
      multiline: true,
      ...(Platform.OS === 'ios' ? { minHeight: 20 * 2 } : { numberOfLines: 2 }),
      name: 'address',
      error: props.submitting && !props.value,
      ...props,
    }}
  />
);

Address.propTypes = {
  submitting: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default Address;
