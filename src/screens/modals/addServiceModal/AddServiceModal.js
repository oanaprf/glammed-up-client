import React from 'react';

import { t } from '@@config';
import * as C from '@@utils/constants';
import { Modal, Spacer } from '@@components';

import { Name, Category, Price, Duration, SaveButton } from './components';
import * as S from './styled';

const AddServiceModal = () => (
  <Modal
    name={C.MODALS.ADD_SERVICE}
    style={{ width: '90%' }}
    title={t('profile.addService')}
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
      <Spacer height={20} />
      <SaveButton />
    </S.ModalContainer>
  </Modal>
);

export default AddServiceModal;
