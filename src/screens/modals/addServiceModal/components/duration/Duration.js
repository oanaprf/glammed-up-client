import React from 'react';

import { NumberSpinner } from '@@components';

const Duration = props => (
  <NumberSpinner
    {...{
      dark: true,
      rounded: true,
      name: 'duration',
      step: 10,
      ...props,
    }}
  />
);

export default Duration;
