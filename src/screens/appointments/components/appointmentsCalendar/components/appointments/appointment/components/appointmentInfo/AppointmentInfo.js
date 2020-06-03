import React from 'react';

import { Spacer } from '@@components';
import * as S from './styled';

const AppointmentInfo = () => (
  <S.AppointmentInfoContainer>
    <S.ServiceNameText>13:30</S.ServiceNameText>
    <Spacer height={5} />
    <S.ProviderNameText>Oana Popescu</S.ProviderNameText>
  </S.AppointmentInfoContainer>
);

export default AppointmentInfo;
