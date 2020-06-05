import React from 'react';

import { t } from '@@config';
import * as C from '@@utils/constants';
import { Modal, Spacer } from '@@components';

import {
  SaveButton,
  ProfilePicture,
  FirstName,
  LastName,
  PhoneNumber,
  Address,
} from './components';
import * as S from './styled';

const EditUserModal = () => (
  <Modal
    name={C.MODALS.EDIT_USER}
    style={{ width: '90%' }}
    title={t('profile.editProfile')}
  >
    <S.ModalContainer>
      <S.RowContainer>
        <S.HalfFlex>
          <ProfilePicture />
        </S.HalfFlex>
        <S.HalfFlex>
          <FirstName />
          <Spacer height={5} />
          <LastName />
        </S.HalfFlex>
      </S.RowContainer>
      <Spacer height={5} />
      <PhoneNumber />
      <Spacer height={5} />
      <Address />
      <Spacer height={10} />
      <SaveButton />
    </S.ModalContainer>
  </Modal>
);

export default EditUserModal;
