import React from 'react';

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
    style={{ width: '90%', height: 500 }}
    title={t('service.addService')}
  >
    <S.ModalContainer>
      <S.FlexContainer>
        <Name />
        <Spacer height={10} />
        <Category />
        <Spacer height={10} />
        <S.RowContainer>
          <Price />
          <Duration />
        </S.RowContainer>
        <Spacer height={10} />
        <ServiceImagePicker />
      </S.FlexContainer>
      <SaveButton />
    </S.ModalContainer>
  </Modal>
);

export default AddServiceModal;
