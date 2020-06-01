import React from 'react';
import { Icon } from 'react-native-elements';

import { theme } from '@@config';

import * as S from './styled';

const UserDetails = () => (
  <S.UserDetailsContainer>
    <S.UserFullname>Oana Profir</S.UserFullname>
    <S.RowContainer>
      <Icon
        {...{
          name: 'phone',
          type: 'feather',
          size: 15,
          color: theme.colors.theme_black_pink.secondary,
        }}
      />
      <S.StyledText>0769117933</S.StyledText>
    </S.RowContainer>
    <S.RowContainer>
      <Icon
        {...{
          name: 'map-pin',
          type: 'feather',
          size: 15,
          color: theme.colors.theme_black_pink.secondary,
        }}
      />
      <S.StyledText>
        Strada Ion Berindei 2, bloc OD 47, scara A, etaj 7, apart. 30
      </S.StyledText>
    </S.RowContainer>
  </S.UserDetailsContainer>
);

export default UserDetails;
