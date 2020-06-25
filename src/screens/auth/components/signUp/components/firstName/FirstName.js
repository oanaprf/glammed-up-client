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
  value: PropTypes.string.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default FirstName;
