import React from 'react';
import { Icon } from 'react-native-elements';

import { theme } from '@@config';
import * as S from './styled';

const ServiceDetails = () => (
  <S.ServiceDetails>
    <S.RowContainer>
      <S.WhiteTextWithPadding family="BOLD">100</S.WhiteTextWithPadding>
      <S.WhiteText size="XS">lei</S.WhiteText>
    </S.RowContainer>
    <S.RowSpaceBetweenContainer>
      <S.WhiteText family="BOLD" numberOfLines={2}>
        Unghii cu gel
      </S.WhiteText>
      <S.RowSpaceBetweenContainer>
        <S.WhiteTextWithPadding family="BOLD">5</S.WhiteTextWithPadding>
        <Icon
          {...{
            name: 'star',
            type: 'antdesign',
            size: 18,
            color: theme.colors.warning,
          }}
        />
      </S.RowSpaceBetweenContainer>
    </S.RowSpaceBetweenContainer>
    <S.WhiteText size="XS">Oana Profir</S.WhiteText>
  </S.ServiceDetails>
);

export default ServiceDetails;
