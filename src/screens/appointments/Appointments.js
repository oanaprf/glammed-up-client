/* eslint-disable react/jsx-key */
import React from 'react';

import { Text, ButtonText } from '@@components';
import { t } from '@@config';

import { AppointmentsList, AppointmentsCalendar } from './components';
import * as S from './styled';

const Appointments = () => (
  <S.Container>
    <S.Header>
      <ButtonText size="XL" family="REGULAR">
        {t('appointments.pageName')}
      </ButtonText>
    </S.Header>
    <S.Body>
      <S.StyledTabs
        tabLabels={[
          <Text family="BOLD" uppercase>
            {t('appointments.list')}
          </Text>,
          <Text family="BOLD" uppercase>
            {t('appointments.calendar')}
          </Text>,
        ]}
        tabContents={[<AppointmentsList />, <AppointmentsCalendar />]}
      />
    </S.Body>
  </S.Container>
);

Appointments.propTypes = {};

export default Appointments;
