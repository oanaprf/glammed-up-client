import React from 'react';
import { Icon } from 'react-native-elements';

import { t, theme } from '@@config';
import * as C from '@@utils/constants';
import { Modal, Button, Spacer } from '@@components';

import { ServiceDetails, Date, Time } from './components';
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
      <Spacer />
      <Button rounded>
        <Icon
          {...{
            name: 'check',
            type: 'feather',
            size: 25,
            color: theme.colors.white,
          }}
        />
      </Button>
    </S.ModalContainer>
  </Modal>
);

export default BookAppointmentModal;
