import React from 'react';
import { Icon } from 'react-native-elements';

import { t, theme } from '@@config';
import * as C from '@@utils/constants';
import { Modal, Button, Spacer } from '@@components';

import { Date, Time, Client, Service } from './components';
import * as S from './styled';

const AddManualAppointment = () => (
  <Modal
    name={C.MODALS.ADD_MANUAL_APPOINTMENT}
    style={{ width: '90%' }}
    title={t('appointments.addManualAppointment')}
  >
    <S.ModalContainer>
      <Date />
      <Spacer height={5} />
      <S.RowContainer>
        <S.FlexContainer>
          <Time />
        </S.FlexContainer>
        <S.FlexContainer>
          <Client />
        </S.FlexContainer>
      </S.RowContainer>
      <Spacer height={5} />
      <Service />
      <Spacer height={15} />
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

export default AddManualAppointment;
