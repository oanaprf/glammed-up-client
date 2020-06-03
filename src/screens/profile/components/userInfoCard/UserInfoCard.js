import React from 'react';
import { Icon } from 'react-native-elements';

import { theme } from '@@config';

import * as S from './styled';

const UserInfoCard = () => (
  <S.CardContainer>
    <S.StyledRow>
      <Icon
        {...{
          name: 'mail',
          type: 'feather',
          size: 22,
          color: theme.colors.white,
        }}
      />
      <S.StyledText family="REGULAR">oanaprofir12@gmail.com</S.StyledText>
    </S.StyledRow>
    <S.StyledRow>
      <Icon
        {...{
          name: 'phone',
          type: 'feather',
          size: 22,
          color: theme.colors.white,
        }}
      />
      <S.StyledText family="REGULAR">0769117933</S.StyledText>
    </S.StyledRow>
    <S.StyledRow>
      <Icon
        {...{
          name: 'map-pin',
          type: 'feather',
          size: 22,
          color: theme.colors.white,
        }}
      />
      <S.StyledText family="REGULAR">
        Strada Ion Berindei 2, bloc OD 47, scara A, etaj 7, apart. 30
      </S.StyledText>
    </S.StyledRow>
  </S.CardContainer>
);

export default UserInfoCard;
