import React from 'react';

import { Spacer } from '@@components';

import { ServiceInfo, Comment } from './components';
import * as S from './styled';

const servicePicture = require('@@assets/images/nails.jpg');

const Review = () => (
  <S.CardContainer>
    <S.ReviewInfo>
      <Spacer height={10} />
      <ServiceInfo />
      <Comment />
    </S.ReviewInfo>
    <S.ServicePicture source={servicePicture} />
  </S.CardContainer>
);

export default Review;
