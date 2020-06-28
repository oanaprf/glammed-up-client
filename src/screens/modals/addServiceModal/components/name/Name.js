import React from 'react';
import PropTypes from 'prop-types';

import { TextInput } from '@@components';

const Name = props => (
  <TextInput
    {...{
      dark: true,
      name: 'name',
      error: props.submitting && !props.value,
      ...props,
    }}
  />
);

Name.propTypes = {
  submitting: PropTypes.bool.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Name;
