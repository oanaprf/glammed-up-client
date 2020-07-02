/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';

import { Text, ButtonText } from '@@components';
import { t } from '@@config';
import {
  AddManualAppointment,
  AddReviewModal,
  CancelAppointmentModal,
  CompleteAppointmentModal,
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
          ...(isCurrentUserProvider
            ? [
                <Text family="BOLD" uppercase>
                  {t('appointments.calendar')}
                </Text>,
              ]
            : []),
          <Text family="BOLD" uppercase>
            {t('appointments.list')}
          </Text>,
        ]}
        tabContents={[
          ...(isCurrentUserProvider
            ? [<AppointmentsCalendar appointments={providerAppointments} />]
            : []),
          <AppointmentsList appointments={clientAppointments} />,
        ]}
      />
    </S.Body>
    {isCurrentUserProvider ? <AddManualAppointment /> : null}
    <AddReviewModal />
    <CancelAppointmentModal />
    <CompleteAppointmentModal />
  </S.Container>
);

Appointments.propTypes = {
  isCurrentUserProvider: PropTypes.bool.isRequired,
  clientAppointments: PropTypes.array,
  providerAppointments: PropTypes.array,
};

export default Appointments;
