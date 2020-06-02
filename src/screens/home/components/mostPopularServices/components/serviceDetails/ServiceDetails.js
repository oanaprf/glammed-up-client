import React from 'react';
import { Icon } from 'react-native-elements';

import { theme } from '@@config';
import * as S from './styled';

const ServiceDetails = () => (
  <S.ServiceDetails>
    <S.RowContainer>
      <S.PriceValueText>100</S.PriceValueText>
      <S.PriceCurrencyText>lei</S.PriceCurrencyText>
    </S.RowContainer>
    <S.RowSpaceBetweenContainer>
      <S.ServiceNameText numberOfLines={2}>Unghii cu gel</S.ServiceNameText>
      <S.RowSpaceBetweenContainer>
        <S.RatingText>5</S.RatingText>
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
    <S.PriceCurrencyText>Oana Profir</S.PriceCurrencyText>
  </S.ServiceDetails>
);

export default ServiceDetails;
