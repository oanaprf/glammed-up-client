import React from 'react';
import { Icon } from 'react-native-elements';

import { t, theme } from '@@config';
import { Modal, Calendar, Button, Dropdown, Spacer } from '@@components';

import { ServiceDetails } from './components';
import * as S from './styled';

const CreateAppointmentModal = () => (
  <Modal
    name="createAppointmentModal"
    style={{ width: '90%', overflow: 'hidden' }}
    title={t('appointments.makeAnAppointment')}
  >
    <S.ModalContainer>
      <ServiceDetails />
      <Calendar />
      <Spacer />
      <Dropdown
        dark
        maxHeight={150}
        options={['10:30', '14:30', '15:30', '16:30', '17:30', '14:00']}
        placeholder={t('appointments.chooseHour')}
      />
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

export default CreateAppointmentModal;
