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
}) => (
  <Modal
    name={C.MODALS.ADD_MANUAL_APPOINTMENT}
    style={{ width: '90%' }}
    title={t('appointments.addManualAppointment')}
  >
    <S.ModalContainer>
      <Service serviceNames={serviceNames} />
      <Spacer height={10} />
      <Date {...{ fetchFreeSpots, currentUserId, serviceNames }} />
      <Spacer height={5} />
      <S.RowContainer>
        <S.FlexContainer>
          <Time freeSpots={freeSpots} />
        </S.FlexContainer>
        <S.FlexContainer>
          <Client clientNames={clientNames} />
        </S.FlexContainer>
      </S.RowContainer>
      <Spacer height={5} />
      <View style={{ zIndex: -1 }}>
        <SaveButton />
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
};

export default AddManualAppointment;
