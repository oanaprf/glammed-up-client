import React from 'react';

import { t } from '@@config';
import * as C from '@@utils/constants';
import { Modal, Spacer } from '@@components';

import { Email, Password, SaveButton } from './components';
import * as S from './styled';

const EditCredentialsModal = () => (
  <Modal
    name={C.MODALS.EDIT_CREDENTIALS_MODAL}
    style={{ width: '90%' }}
    title={t('settings.editCredentials')}
  >
    <S.ModalContainer>
      <Email />
      <Spacer height={10} />
      <Password />
      <Spacer height={10} />
      <SaveButton />
    </S.ModalContainer>
  </Modal>
);

export default EditCredentialsModal;
