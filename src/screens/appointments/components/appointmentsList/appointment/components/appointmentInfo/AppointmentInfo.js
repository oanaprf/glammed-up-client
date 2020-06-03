import React from 'react';

import * as S from './styled';

const AppointmentInfo = () => (
  <>
    <S.RowContainer>
      <S.ServiceNameText numberOfLines={1}>Unghii cu gels</S.ServiceNameText>
      <S.DateText>12.04.2020</S.DateText>
    </S.RowContainer>
    <S.RowContainer>
      <S.ProviderNameText>by Narcisa Petcu </S.ProviderNameText>
      <S.TimeText>13:30</S.TimeText>
    </S.RowContainer>
  </>
);

export default AppointmentInfo;
