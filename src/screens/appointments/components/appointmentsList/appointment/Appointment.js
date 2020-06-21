import React from 'react';
import PropTypes from 'prop-types';

import { Spacer } from '@@components';

import { AppointmentInfo, ProviderInfo } from './components';
import * as S from './styled';

const Appointment = ({ appointment = {} }) => (
  <S.CardContainer>
    <S.AppointmentInfo>
      <AppointmentInfo appointment={appointment} />
      <Spacer height={10} />
      <ProviderInfo provider={appointment.provider} />
    </S.AppointmentInfo>
  </S.CardContainer>
);

Appointment.propTypes = {
  appointment: PropTypes.object.isRequired,
};

export default Appointment;
