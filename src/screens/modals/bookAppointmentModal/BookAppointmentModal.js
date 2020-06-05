import React from 'react';

import { t } from '@@config';
import * as C from '@@utils/constants';
import { Modal, Spacer } from '@@components';

import { ServiceDetails, Date, Time, SaveButton } from './components';
import * as S from './styled';

const BookAppointmentModal = () => (
  <Modal
    name={C.MODALS.BOOK_APPOINTMENT}
    style={{ width: '90%' }}
    title={t('appointments.bookAppointment')}
  >
    <S.ModalContainer>
      <ServiceDetails />
      <Spacer />
      <Date />
      <Spacer height={5} />
      <Time />
      <Spacer height={10} />
      <SaveButton />
    </S.ModalContainer>
  </Modal>
);

export default BookAppointmentModal;
