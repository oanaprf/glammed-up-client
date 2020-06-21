import React from 'react';
import PropTypes from 'prop-types';

import { Spacer, Text } from '@@components';
import {
  getTime,
  getClientFullName,
  getStatus,
} from '@@store/modules/appointments/selectors';
import { t } from '@@config';

import * as S from './styled';

const AppointmentInfo = ({ appointment }) => (
  <S.AppointmentInfoContainer>
    <Text family="BOLD" size="M">
      {getTime(appointment)}
    </Text>
    <Spacer height={5} />
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
