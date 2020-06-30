/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';

import { Text, ButtonText } from '@@components';
import { t } from '@@config';
import {
  AddManualAppointment,
  AddReviewModal,
  CancelAppointmentModal,
} from '@@screens/modals';

import { AppointmentsList, AppointmentsCalendar } from './components';
import * as S from './styled';

const Appointments = ({
  isCurrentUserProvider,
  clientAppointments = [],
  providerAppointments = [],
}) => (
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
          ...(isCurrentUserProvider
            ? [
                <Text family="BOLD" uppercase>
                  {t('appointments.calendar')}
                </Text>,
              ]
            : []),
        ]}
        tabContents={[
          <AppointmentsList appointments={clientAppointments} />,
          ...(isCurrentUserProvider
            ? [<AppointmentsCalendar appointments={providerAppointments} />]
            : []),
        ]}
      />
    </S.Body>
    {isCurrentUserProvider ? <AddManualAppointment /> : null}
    <AddReviewModal />
    <CancelAppointmentModal />
  </S.Container>
);

Appointments.propTypes = {
  isCurrentUserProvider: PropTypes.bool.isRequired,
  clientAppointments: PropTypes.array,
  providerAppointments: PropTypes.array,
};

export default Appointments;
