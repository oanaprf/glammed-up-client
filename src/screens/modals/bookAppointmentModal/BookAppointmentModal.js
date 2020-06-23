import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { t } from '@@config';
import * as C from '@@utils/constants';
import { Modal, Spacer } from '@@components';

import { ServiceDetails, Date, Time, SaveButton } from './components';
import * as S from './styled';

const BookAppointmentModal = ({ service }) => (
  <Modal
    name={C.MODALS.BOOK_APPOINTMENT}
    style={{ width: '90%' }}
    title={t('appointments.bookAppointment')}
  >
    <S.ModalContainer>
      <ServiceDetails service={service} />
      <Spacer />
      <Date />
      <Spacer height={5} />
      <Time />
      <Spacer height={10} />
      <View style={{ zIndex: -1 }}>
        <SaveButton />
      </View>
    </S.ModalContainer>
  </Modal>
);

BookAppointmentModal.propTypes = {
  service: PropTypes.object.isRequired,
};

export default BookAppointmentModal;
