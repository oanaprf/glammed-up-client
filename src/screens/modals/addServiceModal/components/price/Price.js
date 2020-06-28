import React from 'react';
import PropTypes from 'prop-types';

import { NumberSpinner } from '@@components';

const Price = props => (
  <NumberSpinner
    {...{
      dark: true,
      rounded: true,
      name: 'price',
      step: 10,
      error: props.submitting && !props.value,
      ...props,
    }}
  />
);

Price.propTypes = {
  submitting: PropTypes.bool.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Price;
