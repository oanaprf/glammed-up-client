import React from 'react';
import PropTypes from 'prop-types';

import { Text } from '@@components';
import {
  getTime,
  getClientFullName,
  getStatus,
} from '@@store/modules/appointments/selectors';
import { t } from '@@config';
import * as C from '@@utils/constants';
import { CancelButton } from '@@screens/common';

import * as S from './styled';

const AppointmentInfo = ({ appointment }) => (
  <S.AppointmentInfoContainer>
    <S.RowContainer>
      <Text family="BOLD" size="M">
        {getTime(appointment)}
      </Text>
      {appointment.status === C.APPOINTMENT_STATUS.PENDING_APPROVAL ? (
        <CancelButton appointment={appointment} />
      ) : null}
    </S.RowContainer>
    <Text>{getClientFullName(appointment)}</Text>
    <S.StyledText family="BOLD" uppercase size="XS">
      {t(`appointments.status.${getStatus(appointment)}`)}
    </S.StyledText>
  </S.AppointmentInfoContainer>
);

AppointmentInfo.propTypes = {
  appointment: PropTypes.object.isRequired,
};

export default AppointmentInfo;
