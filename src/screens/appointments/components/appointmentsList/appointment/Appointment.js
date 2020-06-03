import React from 'react';

import { Spacer } from '@@components';

import { AppointmentInfo, ProviderInfo } from './components';
import * as S from './styled';

const Review = () => (
  <S.CardContainer>
    <S.AppointmentInfo>
      <AppointmentInfo />
      <Spacer height={10} />
      <ProviderInfo />
    </S.AppointmentInfo>
  </S.CardContainer>
);

export default Review;
