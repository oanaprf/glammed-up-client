import React from 'react';
import PropTypes from 'prop-types';

import { getFirstPicture } from '@@store/modules/services/selectors';

import { AppointmentInfo } from './components';
import * as S from './styled';

const Appointment = ({ appointment = {} }) => (
  <S.CardContainer>
    <S.AppointmentInfo>
      <AppointmentInfo appointment={appointment} />
    </S.AppointmentInfo>
    <S.ServicePicture source={{ uri: getFirstPicture(appointment.service) }} />
  </S.CardContainer>
);

Appointment.propTypes = {
  appointment: PropTypes.object.isRequired,
};

export default Appointment;
