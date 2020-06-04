import React from 'react';

import { Text } from '@@components';

import * as S from './styled';

const AppointmentInfo = () => (
  <>
    <S.RowContainer>
      <Text family="BOLD" numberOfLines={1}>
        Unghii cu gels
      </Text>
      <Text family="BOLD">12.04.2020</Text>
    </S.RowContainer>
    <S.RowContainer>
      <Text size="XS">by Narcisa Petcu </Text>
      <S.StyledText family="BOLD">13:30</S.StyledText>
    </S.RowContainer>
    <S.StyledText family="BOLD" uppercase size="XS">
      Finalizată
    </S.StyledText>
  </>
);

export default AppointmentInfo;
