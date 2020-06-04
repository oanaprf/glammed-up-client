import React from 'react';

import { NumberSpinner } from '@@components';

const Price = props => (
  <NumberSpinner
    {...{
      dark: true,
      rounded: true,
      name: 'price',
      step: 10,
      ...props,
    }}
  />
);

export default Price;
