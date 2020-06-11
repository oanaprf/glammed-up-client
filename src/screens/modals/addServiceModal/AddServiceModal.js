import React from 'react';
import { View } from 'react-native';

import { t } from '@@config';
import * as C from '@@utils/constants';
import { Modal, Spacer } from '@@components';

import {
  Name,
  Category,
  Price,
  Duration,
  SaveButton,
  ServiceImagePicker,
} from './components';
import * as S from './styled';

const AddServiceModal = () => (
  <Modal
    name={C.MODALS.ADD_SERVICE}
    style={{ width: '90%' }}
    title={t('service.addService')}
  >
    <S.ModalContainer>
      <Name />
      <Spacer height={10} />
      <Category />
      <Spacer height={10} />
      <S.RowContainer>
        <Price />
        <Duration />
      </S.RowContainer>
      <Spacer height={10} />
      <View style={{ zIndex: -1 }}>
        <ServiceImagePicker />
      </View>
      <Spacer height={10} />
      <SaveButton />
    </S.ModalContainer>
  </Modal>
);

export default AddServiceModal;
