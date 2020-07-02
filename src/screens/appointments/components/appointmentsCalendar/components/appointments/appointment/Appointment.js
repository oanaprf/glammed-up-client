import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

import { getFirstPicture } from '@@store/modules/services/selectors';
import * as C from '@@utils/constants';
import { withOpenModal } from '@@hocs';

import { AppointmentInfo } from './components';
import * as S from './styled';

const Appointment = ({ appointment = {}, openModal }) => (
  <TouchableOpacity
    {...{
      ...(appointment.status === C.APPOINTMENT_STATUS.PENDING_APPROVAL && {
        onPress: () =>
          openModal({
            name: C.MODALS.APPROVE_APPOINTMENT_MODAL,
            data: {
              appointment,
              service: appointment.service,
              client: appointment.client,
            },
          }),
      }),
      activeOpacity: 1,
    }}
  >
    <S.CardContainer>
      <S.AppointmentInfo>
        <AppointmentInfo appointment={appointment} />
      </S.AppointmentInfo>
      <S.ServicePicture
        source={{ uri: getFirstPicture(appointment.service || {}) }}
      />
    </S.CardContainer>
  </TouchableOpacity>
);

Appointment.propTypes = {
  appointment: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default withOpenModal(Appointment);
