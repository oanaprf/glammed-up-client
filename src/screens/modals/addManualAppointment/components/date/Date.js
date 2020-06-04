import React from 'react';

import { Calendar } from '@@components';

const Date = props => (
  <Calendar
    {...{
      name: 'date',
      ...props,
    }}
  />
);

export default Date;
