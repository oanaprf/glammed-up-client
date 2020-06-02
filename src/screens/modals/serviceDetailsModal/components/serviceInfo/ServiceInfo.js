import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

import { theme } from '@@config';
import { Spacer } from '@@components';

import * as S from './styled';
import { ProviderInfo } from './components';

const ServiceInfo = () => (
  <View>
    <S.RowContainer>
      <S.ServiceNameText>Unghii cu gel</S.ServiceNameText>
      <S.RowContainer>
        <S.PriceValueText>100</S.PriceValueText>
        <S.PriceCurrencyText>lei</S.PriceCurrencyText>
      </S.RowContainer>
    </S.RowContainer>
    <S.RowContainer>
      <S.UserInfoText>Oana Profir</S.UserInfoText>
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
    <Spacer height={15} />
    <ProviderInfo />
    <Spacer height={15} />
  </View>
);

export default ServiceInfo;
