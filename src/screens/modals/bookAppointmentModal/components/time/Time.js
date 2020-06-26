import React from 'react';
import PropTypes from 'prop-types';

import { Dropdown } from '@@components';

const Time = props => (
  <Dropdown
    {...{
      name: 'time',
      dark: true,
      maxHeight: 150,
      error: props.submitting && !props.value,
      ...props,
    }}
  />
);

Time.propTypes = {
  submitting: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default Time;
