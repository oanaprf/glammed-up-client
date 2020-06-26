import React from 'react';
import PropTypes from 'prop-types';

import { t } from '@@config';
import * as C from '@@utils/constants';
import { Modal, Text, ButtonText } from '@@components';
import { getDate, getTime } from '@@store/modules/appointments/selectors';
import { getFullName } from '@@store/modules/user/selectors';
import { getName } from '@@store/modules/services/selectors';

import * as S from './styled';

const ApproveAppointmentModal = ({
  data: { service, appointment, client },
  onApprove,
  onReject,
}) => (
  <Modal
    name={C.MODALS.APPROVE_APPOINTMENT_MODAL}
    style={{ width: '90%' }}
    title={t('appointments.approveAppointment')}
  >
    <S.ModalContainer>
      <S.InfoContainer>
        <S.RowContainer>
          <S.MarginedText size="M">
            {`${t('appointments.fields.client')}:`}
          </S.MarginedText>
          <Text family="BOLD" size="M">
            {getName(service)}
          </Text>
        </S.RowContainer>
        <S.RowContainer>
          <S.MarginedText size="M">
            {`${t('appointments.fields.service')}:`}
          </S.MarginedText>
          <Text family="BOLD" size="M">
            {getFullName(client)}
          </Text>
        </S.RowContainer>
        <S.RowContainer>
          <S.MarginedText size="M">
            {`${t('appointments.fields.date')}:`}
          </S.MarginedText>
          <Text family="BOLD" size="M">
            {getDate(appointment)}
          </Text>
        </S.RowContainer>
        <S.RowContainer>
          <S.MarginedText size="M">
            {`${t('appointments.fields.time')}:`}
          </S.MarginedText>
          <S.PrimaryColorText family="BOLD" size="M">
            {getTime(appointment)}
          </S.PrimaryColorText>
        </S.RowContainer>
      </S.InfoContainer>
      <S.ButtonsContainer>
        <S.ApproveButton rounded onPress={onApprove}>
          <ButtonText>{t('common.approve')}</ButtonText>
        </S.ApproveButton>
        <S.RejectButton rounded onPress={onReject}>
          <ButtonText>{t('common.reject')}</ButtonText>
        </S.RejectButton>
      </S.ButtonsContainer>
    </S.ModalContainer>
  </Modal>
);

ApproveAppointmentModal.propTypes = {
  data: PropTypes.object.isRequired,
  onApprove: PropTypes.func.isRequired,
  onReject: PropTypes.func.isRequired,
};

export default ApproveAppointmentModal;
