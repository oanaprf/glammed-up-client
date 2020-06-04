import React from 'react';

import { t } from '@@config';
import * as C from '@@utils/constants';
import { Modal, Spacer } from '@@components';

import {
  SaveButton,
  ProfilePicture,
  FirstName,
  LastName,
  Email,
  PhoneNumber,
  Address,
} from './components';
import * as S from './styled';

const EditUserModal = () => (
  <Modal
    name={C.MODALS.EDIT_USER}
    style={{ width: '90%', height: 600 }}
    title={t('profile.editProfile')}
  >
    <S.ModalContainer>
      <S.FlexContainer>
        <S.RowContainer>
          <S.ProfilePictureWrapper>
            <ProfilePicture />
          </S.ProfilePictureWrapper>
          <S.EmailWrapper>
            <Email />
          </S.EmailWrapper>
        </S.RowContainer>
        <Spacer height={5} />
        <FirstName />
        <Spacer height={5} />
        <LastName />
        <Spacer height={5} />
        <PhoneNumber />
        <Spacer height={5} />
        <Address />
      </S.FlexContainer>
      <Spacer height={5} />
      <SaveButton />
    </S.ModalContainer>
  </Modal>
);

export default EditUserModal;
