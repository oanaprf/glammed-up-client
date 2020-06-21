import React from 'react';
import PropTypes from 'prop-types';

import { Calendar } from '@@components';

import { Appointments } from './components';
import * as S from './styled';

const AppointmentsCalendar = ({ appointments = [], onChangeDate }) => (
  <S.Container>
    <Calendar onChange={onChangeDate} />
    <Appointments appointments={appointments} />
  </S.Container>
);

AppointmentsCalendar.propTypes = {
  appointments: PropTypes.array,
  onChangeDate: PropTypes.func.isRequired,
};

export default AppointmentsCalendar;
