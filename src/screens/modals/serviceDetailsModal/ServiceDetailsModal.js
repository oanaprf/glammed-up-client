import React from 'react';
import PropTypes from 'prop-types';
import { SliderBox } from 'react-native-image-slider-box';

import { Modal, Text, Button } from '@@components';
import { theme, t } from '@@config';
import { withOpenModal } from '@@hocs';

import { ServiceInfo } from './components';
import * as S from './styled';

const servicePicture = require('@@assets/images/nails.jpg');
const defaultPicture = require('@@assets/images/nails.jpg');

const pictures = [servicePicture, defaultPicture];

const ServiceDetailsModal = ({ openModal }) => (
  <Modal
    name="serviceDetailsModal"
    style={{ width: '90%', overflow: 'hidden' }}
  >
    <>
      <SliderBox
        images={pictures}
        sliderBoxHeight={300}
        ImageComponentStyle={{
          borderTopLeftRadius: theme.borderRadius.L,
          borderTopRightRadius: theme.borderRadius.L,
          width: '100%',
        }}
      />
      <S.ServiceDetailsContainer>
        <ServiceInfo />
        <Button
          rounded
          onPress={() => openModal({ name: 'createAppointmentModal' })}
        >
          <Text style={{ color: 'white' }}>
            {t('appointments.makeAnAppointment')}
          </Text>
        </Button>
      </S.ServiceDetailsContainer>
    </>
  </Modal>
);

ServiceDetailsModal.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default withOpenModal(ServiceDetailsModal);
