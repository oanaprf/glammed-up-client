import React from 'react';
import PropTypes from 'prop-types';

import { Text } from '@@components';
import {
  getDate,
  getTime,
  getStatus,
} from '@@store/modules/appointments/selectors';
import {
  getServiceName,
  getProviderFullName,
} from '@@store/modules/reviews/selectors';
import { t } from '@@config';

import * as S from './styled';

const AppointmentInfo = ({ appointment = {} }) => (
  <>
    <S.RowContainer>
      <Text family="BOLD" numberOfLines={1}>
        {getServiceName(appointment)}
      </Text>
      <Text family="BOLD">{getDate(appointment)}</Text>
    </S.RowContainer>
    <S.RowContainer>
      <Text size="XS">{getProviderFullName(appointment)}</Text>
      <S.StyledText family="BOLD">{getTime(appointment)}</S.StyledText>
    </S.RowContainer>
    <S.StyledText family="BOLD" uppercase size="XS">
      {t(`appointments.status.${getStatus(appointment)}`)}
    </S.StyledText>
  </>
);

AppointmentInfo.propTypes = {
  appointment: PropTypes.object.isRequired,
};

export default AppointmentInfo;
