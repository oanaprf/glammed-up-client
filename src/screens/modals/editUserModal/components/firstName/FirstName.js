import React from 'react';
import PropTypes from 'prop-types';

import { TextInput } from '@@components';

const FirstName = props => (
  <TextInput
    {...{
      dark: true,
      name: 'firstName',
      error: props.submitting && !props.value,
      ...props,
    }}
  />
);

FirstName.propTypes = {
  submitting: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default FirstName;
