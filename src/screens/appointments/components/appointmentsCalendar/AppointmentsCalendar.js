import React from 'react';

import { Calendar } from '@@components';

import { Appointments } from './components';
import * as S from './styled';

const AppointmentsCalendar = () => (
  <S.Container>
    <Calendar />
    <Appointments />
  </S.Container>
);

export default AppointmentsCalendar;
