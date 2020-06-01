import React from 'react';

import { ServiceDetails } from './components';

import * as S from './styled';

const servicePicture = require('@@assets/images/nails.jpg');

const Service = () => (
  <S.CardContainer>
    <S.ServicePicture source={servicePicture}>
      <S.StyledLinearGradient
        colors={[
          'transparent',
          'transparent',
          'rgba(0,0,0,0.3)',
          'rgba(0,0,0,0.6)',
        ]}
      />
      <ServiceDetails />
    </S.ServicePicture>
  </S.CardContainer>
);

export default Service;
