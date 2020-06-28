import React from 'react';

import { Calendar } from '@@components';

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

const Date2 = props => (
  <Calendar
    {...{
      name: 'date',
      minDate: today,
      selectedDay: { dateString: tomorrow.toJSON().substring(0, 10) },
      ...props,
    }}
  />
);

export default Date2;
