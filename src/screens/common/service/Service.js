import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

import { ServiceDetails as DefaultServiceDetails } from './components';

import * as S from './styled';

const servicePicture = require('@@assets/images/nails.jpg');

const Service = ({
  openModal,
  style,
  userService,
  ServiceDetails = DefaultServiceDetails,
}) => (
  <S.CardContainer style={style}>
    <TouchableOpacity
      onPress={() => openModal({ name: 'serviceDetailsModal' })}
      activeOpacity={0.8}
    >
      <S.ServicePicture source={servicePicture}>
        <S.StyledLinearGradient
          colors={['transparent', 'transparent', 'rgba(0,0,0,0.5)']}
        />
        <ServiceDetails userService={userService} />
      </S.ServicePicture>
    </TouchableOpacity>
  </S.CardContainer>
);

Service.propTypes = {
  openModal: PropTypes.func.isRequired,
  style: PropTypes.array,
  userService: PropTypes.bool,
  ServiceDetails: PropTypes.func,
};

export default Service;
