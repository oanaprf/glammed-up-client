/* eslint-disable no-use-before-define */
import React from 'react';

import { Calendar } from '@@components';

const today = new Date();

const Date2 = props => (
  <Calendar
    {...{
      name: 'date',
      minDate: today,
      selectedDay: { dateString: today.toJSON().substring(0, 10) },
      ...props,
    }}
  />
);

export default Date2;
