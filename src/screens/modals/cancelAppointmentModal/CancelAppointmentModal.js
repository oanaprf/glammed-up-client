import React from 'react';
import PropTypes from 'prop-types';

import { Modal, ButtonText, Spacer } from '@@components';
import * as C from '@@utils/constants';
import { t } from '@@config';

import * as S from './styled';

const CancelAppointmentModal = ({ onPressYes, onPressNo }) => (
  <Modal
    name={C.MODALS.CANCEL_APPOINTMENT_MODAL}
    style={{ width: '90%' }}
    title={t('appointments.cancelAppointment')}
  >
    <S.ModalContainer>
      <S.JustifiedText size="M">
        {t('appointments.cancelAppointmentText')}
      </S.JustifiedText>
      <Spacer height={30} />
      <S.ButtonsContainer>
        <S.YesButton rounded onPress={onPressYes}>
          <ButtonText>{t('common.yes')}</ButtonText>
        </S.YesButton>
        <S.NoButton rounded onPress={onPressNo}>
          <ButtonText>{t('common.no')}</ButtonText>
        </S.NoButton>
      </S.ButtonsContainer>
    </S.ModalContainer>
  </Modal>
);

CancelAppointmentModal.propTypes = {
  onPressYes: PropTypes.func.isRequired,
  onPressNo: PropTypes.func.isRequired,
};

export default CancelAppointmentModal;
