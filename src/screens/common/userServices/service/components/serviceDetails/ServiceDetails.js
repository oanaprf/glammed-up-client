import React from 'react';
import { Icon } from 'react-native-elements';

import { theme } from '@@config';
import * as S from './styled';

const ServiceDetails = () => (
  <S.ServiceDetails>
    <S.ServiceNameText numberOfLines={2}>Unghii cu gel</S.ServiceNameText>
    <S.RowContainer>
      <S.RowContainer>
        <S.PriceValueText>100</S.PriceValueText>
        <S.PriceCurrencyText>lei</S.PriceCurrencyText>
      </S.RowContainer>
      <S.RowContainer>
        <S.RatingText>5</S.RatingText>
        <Icon
          {...{
            name: 'star',
            type: 'antdesign',
            size: 18,
            color: theme.colors.warning,
          }}
        />
      </S.RowContainer>
    </S.RowContainer>
  </S.ServiceDetails>
);

export default ServiceDetails;
