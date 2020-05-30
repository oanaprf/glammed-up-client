import React from 'react';

import { ServiceDetails } from './components';

import * as S from './styled';

const servicePicture = require('@@assets/nails.jpg');

const Service = () => (
  <S.CardContainer>
    <S.ServicePicture source={servicePicture} />
    <S.StyledLinearGradient
      colors={['transparent', 'transparent', 'rgba(0,0,0,0.5)']}
    />
    <ServiceDetails />
  </S.CardContainer>
);

export default Service;
