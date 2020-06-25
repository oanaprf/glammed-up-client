import React from 'react';
import PropTypes from 'prop-types';

import { PasswordInput } from '@@components';

const Password = props => (
  <PasswordInput
    {...{
      dark: true,
      name: 'password',
      error: props.submitting && !props.value,
      ...props,
    }}
  />
);

Password.propTypes = {
  value: PropTypes.string.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default Password;
