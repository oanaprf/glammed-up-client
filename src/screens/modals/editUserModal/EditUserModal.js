import React from 'react';
import PropTypes from 'prop-types';

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

const EditUserModal = ({
  user = {},
  formValues,
  setFormValues,
  submitting,
  setSubmitting,
}) => (
  <Modal
    name={C.MODALS.EDIT_USER}
    style={{ width: '90%' }}
    title={t('profile.editProfile')}
  >
    <S.ModalContainer>
      <S.RowContainer>
        <S.HalfFlex>
          <ProfilePicture {...{ formValues, setFormValues, submitting }} />
        </S.HalfFlex>
        <S.HalfFlex>
          <FirstName {...{ formValues, setFormValues, submitting }} />
          <Spacer height={5} />
          <LastName {...{ formValues, setFormValues, submitting }} />
        </S.HalfFlex>
      </S.RowContainer>
      <Spacer height={5} />
      <PhoneNumber {...{ formValues, setFormValues, submitting }} />
      <Spacer height={5} />
      <Address {...{ formValues, setFormValues, submitting }} />
      <Spacer height={10} />
      <SaveButton {...{ user, formValues, setSubmitting }} />
    </S.ModalContainer>
  </Modal>
);

EditUserModal.propTypes = {
  user: PropTypes.object.isRequired,
  formValues: PropTypes.object.isRequired,
  setFormValues: PropTypes.func.isRequired,
  setSubmitting: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default EditUserModal;
