import React from 'react';
import PropTypes from 'prop-types';

import { TextInput } from '@@components';

const PhoneNumber = props => (
  <TextInput
    {...{
      dark: true,
      name: 'phoneNumber',
      error: props.submitting && !props.value,
      ...props,
    }}
  />
);

PhoneNumber.propTypes = {
  submitting: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default PhoneNumber;
