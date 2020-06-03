/* eslint-disable react/jsx-key */
import React from 'react';

import { Text } from '@@components';
import { t } from '@@config';

import { AppointmentsList, AppointmentsCalendar } from './components';
import * as S from './styled';

const Appointments = () => (
  <S.Container>
    <S.Header>
      <S.Title>{t('appointments.pageName')}</S.Title>
    </S.Header>
    <S.Body>
      <S.StyledTabs
        tabLabels={[
          <Text>{t('appointments.list')}</Text>,
          <Text>{t('appointments.calendar')}</Text>,
        ]}
        tabContents={[<AppointmentsList />, <AppointmentsCalendar />]}
      />
    </S.Body>
  </S.Container>
);

Appointments.propTypes = {};

export default Appointments;
