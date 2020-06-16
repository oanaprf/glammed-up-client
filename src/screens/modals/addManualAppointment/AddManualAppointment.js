import React from 'react';
import { View } from 'react-native';

import { t } from '@@config';
import * as C from '@@utils/constants';
import { Modal, Spacer } from '@@components';

import { Date, Time, Client, Service, SaveButton } from './components';
import * as S from './styled';

const AddManualAppointment = () => (
  <Modal
    name={C.MODALS.ADD_MANUAL_APPOINTMENT}
    style={{ width: '90%' }}
    title={t('appointments.addManualAppointment')}
  >
    <S.ModalContainer>
      <Service />
      <Spacer height={10} />
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
      <View style={{ zIndex: -1 }}>
        <SaveButton />
      </View>
    </S.ModalContainer>
  </Modal>
);

export default AddManualAppointment;