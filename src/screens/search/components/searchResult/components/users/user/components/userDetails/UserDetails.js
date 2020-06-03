import React from 'react';
import { Icon } from 'react-native-elements';

import { theme } from '@@config';
import { Text } from '@@components';

import * as S from './styled';

const UserDetails = () => (
  <S.UserDetailsContainer>
    <Text size="L" family="BOLD">
      Oana Profir
    </Text>
    <S.RowContainer>
      <Icon
        {...{
          name: 'phone',
          type: 'feather',
          size: 15,
          color: theme.colors.theme_black_pink.secondary,
        }}
      />
      <S.StyledText size="XS">0769117933</S.StyledText>
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
      <S.StyledText size="XS">
        Strada Ion Berindei 2, bloc OD 47, scara A, etaj 7, apart. 30
      </S.StyledText>
    </S.RowContainer>
  </S.UserDetailsContainer>
);

export default UserDetails;
