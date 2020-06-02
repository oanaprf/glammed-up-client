import React from 'react';
import { Icon } from 'react-native-elements';

import { theme } from '@@config';
import { Spacer } from '@@components';

import * as S from '../../styled';

const ProviderInfo = () => (
  <S.ProviderInfoContainer>
    <S.RowContainer>
      <Icon
        {...{
          name: 'phone',
          type: 'feather',
          size: 22,
          color: theme.colors.theme_black_pink.secondary,
        }}
      />
      <S.UserInfoText>0769117933</S.UserInfoText>
    </S.RowContainer>
    <Spacer height={2} />
    <S.RowContainer>
      <Icon
        {...{
          name: 'map-pin',
          type: 'feather',
          size: 22,
          color: theme.colors.theme_black_pink.secondary,
        }}
      />
      <S.UserInfoText>
        Strada Ion Berindei 2, bloc OD 47, scara A, etaj 7, apart. 30
      </S.UserInfoText>
    </S.RowContainer>
  </S.ProviderInfoContainer>
);

export default ProviderInfo;
