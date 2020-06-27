import React from 'react';
import PropTypes from 'prop-types';

import { NumberSpinner } from '@@components';

const Duration = props => (
  <NumberSpinner
    {...{
      dark: true,
      rounded: true,
      name: 'duration',
      step: 10,
      error: props.submitting && !props.value,
      ...props,
    }}
  />
);

Duration.propTypes = {
  submitting: PropTypes.bool.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Duration;
