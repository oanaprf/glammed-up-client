import React from 'react';

import { AppointmentInfo } from './components';
import * as S from './styled';

const servicePicture = require('@@assets/images/nails.jpg');

const Review = () => (
  <S.CardContainer>
    <S.AppointmentInfo>
      <AppointmentInfo />
    </S.AppointmentInfo>
    <S.ServicePicture source={servicePicture} />
  </S.CardContainer>
);

export default Review;
