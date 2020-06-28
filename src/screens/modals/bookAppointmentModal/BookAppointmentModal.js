import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { t } from '@@config';
import * as C from '@@utils/constants';
import { Modal, Spacer } from '@@components';

import { ServiceDetails, Date, Time, SaveButton } from './components';
import * as S from './styled';

const BookAppointmentModal = ({
  service,
  fetchFreeSpots,
  freeSpots,
  formValues,
  setFormValues,
  submitting,
  setSubmitting,
  onCloseModal,
}) => (
  <Modal
    name={C.MODALS.BOOK_APPOINTMENT}
    style={{ width: '90%' }}
    title={t('appointments.bookAppointment')}
    onCloseModal={onCloseModal}
  >
    <S.ModalContainer>
      <ServiceDetails service={service} />
      <Spacer />
      <Date
        {...{ service, fetchFreeSpots, formValues, setFormValues, submitting }}
      />
      <Spacer height={5} />
      <Time {...{ freeSpots, formValues, setFormValues, submitting }} />
      <Spacer height={10} />
      <View style={{ zIndex: -1 }}>
        <SaveButton {...{ service, formValues, setSubmitting }} />
      </View>
    </S.ModalContainer>
  </Modal>
);

BookAppointmentModal.propTypes = {
  service: PropTypes.object.isRequired,
  fetchFreeSpots: PropTypes.func.isRequired,
  freeSpots: PropTypes.array,
  formValues: PropTypes.object.isRequired,
  setFormValues: PropTypes.func.isRequired,
  setSubmitting: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default BookAppointmentModal;
