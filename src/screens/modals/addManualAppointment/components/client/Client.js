import React from 'react';
import PropTypes from 'prop-types';

import { Dropdown } from '@@components';

const Client = props => (
  <Dropdown
    {...{
      name: 'client',
      dark: true,
      maxHeight: 150,
      error: props.submitting && !props.value,
      ...props,
    }}
  />
);

Client.propTypes = {
  submitting: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default Client;
