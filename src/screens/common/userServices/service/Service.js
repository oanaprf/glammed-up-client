import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

import { ServiceDetails } from './components';

import * as S from './styled';

const servicePicture = require('@@assets/images/nails.jpg');

const Service = ({ openModal }) => (
  <S.CardContainer>
    <TouchableOpacity
      onPress={() => openModal({ name: 'serviceDetailsModal' })}
      activeOpacity={0.8}
    >
      <S.ServicePicture source={servicePicture} />
      <S.StyledLinearGradient
        colors={['transparent', 'transparent', 'rgba(0,0,0,0.5)']}
      />
      <ServiceDetails />
    </TouchableOpacity>
  </S.CardContainer>
);

Service.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default Service;
