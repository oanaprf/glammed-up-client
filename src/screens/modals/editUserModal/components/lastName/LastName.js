import React from 'react';
import PropTypes from 'prop-types';

import { TextInput } from '@@components';

const LastName = props => (
  <TextInput
    {...{
      dark: true,
      name: 'lastName',
      error: props.submitting && !props.value,
      ...props,
    }}
  />
);

LastName.propTypes = {
  submitting: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default LastName;
