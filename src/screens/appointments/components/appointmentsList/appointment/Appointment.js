import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';

import { Spacer } from '@@components';
import { C } from '@@utils';
import { CancelButton } from '@@screens/common';

import { AppointmentInfo, ProviderInfo, RatingButton } from './components';
import * as S from './styled';

const Appointment = ({ appointment = {} }) => (
  <S.CardContainer>
    <S.AppointmentInfo>
      <AppointmentInfo appointment={appointment} />
      <Spacer height={10} />
      <S.RowContainer>
        <ProviderInfo provider={appointment.provider} />
        {appointment.status === C.APPOINTMENT_STATUS.COMPLETED &&
        !getOr([], 'service.reviews', appointment).find(
          ({ clientId }) => clientId === appointment.clientId
        ) ? (
          <RatingButton
            service={{ ...appointment.service, provider: appointment.provider }}
          />
        ) : null}
        {appointment.status === C.APPOINTMENT_STATUS.PENDING_APPROVAL ? (
          <CancelButton appointment={appointment} />
        ) : null}
      </S.RowContainer>
    </S.AppointmentInfo>
  </S.CardContainer>
);

Appointment.propTypes = {
  appointment: PropTypes.object.isRequired,
};

export default Appointment;
