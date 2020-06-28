import React from 'react';
import PropTypes from 'prop-types';

import { Dropdown } from '@@components';

const Service = props => (
  <Dropdown
    {...{
      name: 'service',
      dark: true,
      maxHeight: 150,
      error: props.submitting && !props.value,
      ...props,
    }}
  />
);

Service.propTypes = {
  submitting: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default Service;
