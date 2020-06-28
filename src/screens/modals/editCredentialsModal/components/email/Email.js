import React from 'react';
import PropTypes from 'prop-types';

import { TextInput } from '@@components';

const Email = props => (
  <TextInput
    {...{
      dark: true,
      name: 'email',
      error: props.submitting && !props.value,
      ...props,
    }}
  />
);

Email.propTypes = {
  submitting: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default Email;
