import React from 'react';
import { SliderBox } from 'react-native-image-slider-box';

import { Modal, Text, Button } from '@@components';
import { theme, t } from '@@config';

import { ServiceInfo } from './components';
import * as S from './styled';

const servicePicture = require('@@assets/images/nails.jpg');
const defaultPicture = require('@@assets/images/nails.jpg');

const pictures = [servicePicture, defaultPicture];

const ServiceDetailsModal = () => (
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
        <Button rounded>
          <Text style={{ color: 'white' }}>
            {t('common.makeAnAppointment')}
          </Text>
        </Button>
      </S.ServiceDetailsContainer>
    </>
  </Modal>
);

export default ServiceDetailsModal;
