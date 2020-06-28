import React from 'react';
import PropTypes from 'prop-types';

import { t } from '@@config';
import * as C from '@@utils/constants';
import { Modal, Spacer } from '@@components';

import { Email, Password, SaveButton } from './components';
import * as S from './styled';

const EditCredentialsModal = ({
  user,
  formValues,
  submitting,
  setFormValues,
  setSubmitting,
}) => (
  <Modal
    name={C.MODALS.EDIT_CREDENTIALS_MODAL}
    style={{ width: '90%' }}
    title={t('settings.editCredentials')}
  >
    <S.ModalContainer>
      <Email {...{ formValues, setFormValues, submitting }} />
      <Spacer height={10} />
      <Password {...{ formValues, setFormValues, submitting }} />
      <Spacer height={10} />
      <SaveButton {...{ user, formValues, setSubmitting }} />
    </S.ModalContainer>
  </Modal>
);

EditCredentialsModal.propTypes = {
  user: PropTypes.object.isRequired,
  formValues: PropTypes.object.isRequired,
  setFormValues: PropTypes.func.isRequired,
  setSubmitting: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default EditCredentialsModal;
