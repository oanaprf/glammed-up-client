import React from 'react';
import PropTypes from 'prop-types';
import { SliderBox } from 'react-native-image-slider-box';

import { Modal, ButtonText, Button } from '@@components';
import { theme, t } from '@@config';
import { withOpenModal } from '@@hocs';
import * as C from '@@utils/constants';

import { ServiceDetails } from './components';
import * as S from './styled';

const ServiceDetailsModal = ({ openModal, service, isOwnService }) => (
  <Modal
    name={C.MODALS.SERVICE_DETAILS}
    style={{ width: '90%', overflow: 'hidden' }}
  >
    <>
      <SliderBox
        images={service.pictures}
        sliderBoxHeight={300}
        ImageComponentStyle={{
          borderTopLeftRadius: theme.borderRadius.L,
          borderTopRightRadius: theme.borderRadius.L,
          width: '100%',
        }}
      />
      <S.ServiceDetailsContainer>
        <ServiceDetails service={service} />
        {isOwnService ? null : (
          <Button
            rounded
            onPress={() => openModal({ name: C.MODALS.BOOK_APPOINTMENT })}
          >
            <ButtonText>{t('appointments.bookAppointment')}</ButtonText>
          </Button>
        )}
      </S.ServiceDetailsContainer>
    </>
  </Modal>
);

ServiceDetailsModal.propTypes = {
  openModal: PropTypes.func.isRequired,
  service: PropTypes.object.isRequired,
  isOwnService: PropTypes.bool.isRequired,
};

export default withOpenModal(ServiceDetailsModal);
