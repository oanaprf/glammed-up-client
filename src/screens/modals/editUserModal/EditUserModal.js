import React from 'react';
import PropTypes from 'prop-types';

import { t } from '@@config';
import * as C from '@@utils/constants';
import { Modal, Spacer } from '@@components';
import {
  getFirstName,
  getLastName,
  getPhoneNumber,
  getAddress,
} from '@@store/modules/user/selectors';

import {
  SaveButton,
  ProfilePicture,
  FirstName,
  LastName,
  PhoneNumber,
  Address,
} from './components';
import * as S from './styled';

const EditUserModal = ({ user }) => (
  <Modal
    name={C.MODALS.EDIT_USER}
    style={{ width: '90%' }}
    title={t('profile.editProfile')}
  >
    <S.ModalContainer>
      <S.RowContainer>
        <S.HalfFlex>
          <ProfilePicture images={[user.profilePicture]} />
        </S.HalfFlex>
        <S.HalfFlex>
          <FirstName value={getFirstName(user)} />
          <Spacer height={5} />
          <LastName value={getLastName(user)} />
        </S.HalfFlex>
      </S.RowContainer>
      <Spacer height={5} />
      <PhoneNumber value={getPhoneNumber(user)} />
      <Spacer height={5} />
      <Address value={getAddress(user)} />
      <Spacer height={10} />
      <SaveButton />
    </S.ModalContainer>
  </Modal>
);

EditUserModal.propTypes = {
  user: PropTypes.object.isRequired,
};

export default EditUserModal;
