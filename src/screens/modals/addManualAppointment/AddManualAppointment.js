import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { t } from '@@config';
import * as C from '@@utils/constants';
import { Modal, Spacer } from '@@components';

import { Date, Time, Client, Service, SaveButton } from './components';
import * as S from './styled';

const AddManualAppointment = ({
  serviceNames = [],
  clientNames = [],
  fetchFreeSpots,
  currentUserId,
  freeSpots = [],
  formValues,
  setFormValues,
  submitting,
  setSubmitting,
  onCloseModal,
}) => (
  <Modal
    name={C.MODALS.ADD_MANUAL_APPOINTMENT}
    style={{ width: '90%' }}
    title={t('appointments.addManualAppointment')}
    onCloseModal={onCloseModal}
  >
    <S.ModalContainer>
      <Service {...{ serviceNames, formValues, setFormValues, submitting }} />
      <Spacer height={10} />
      <View style={{ zIndex: -1 }}>
        <Date
          {...{
            fetchFreeSpots,
            currentUserId,
            serviceNames,
            formValues,
            setFormValues,
            submitting,
          }}
        />
      </View>
      <Spacer height={5} />
      <S.RowContainer>
        <S.FlexContainer>
          <Time {...{ freeSpots, formValues, setFormValues, submitting }} />
        </S.FlexContainer>
        <S.FlexContainer>
          <Client {...{ clientNames, formValues, setFormValues, submitting }} />
        </S.FlexContainer>
      </S.RowContainer>
      <Spacer height={5} />
      <View style={{ zIndex: -1 }}>
        <SaveButton {...{ formValues, setSubmitting, onCloseModal }} />
      </View>
    </S.ModalContainer>
  </Modal>
);

AddManualAppointment.propTypes = {
  serviceNames: PropTypes.array,
  clientNames: PropTypes.array,
  freeSpots: PropTypes.array,
  currentUserId: PropTypes.string.isRequired,
  fetchFreeSpots: PropTypes.func.isRequired,
  formValues: PropTypes.object.isRequired,
  setFormValues: PropTypes.func.isRequired,
  setSubmitting: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default AddManualAppointment;
