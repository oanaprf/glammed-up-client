import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

import { theme } from '@@config';
import { Spacer, Text } from '@@components';

import * as S from './styled';
import { ProviderInfo } from './components';

const ServiceInfo = () => (
  <View>
    <S.RowContainer>
      <Text size="M" family="BOLD">
        Unghii cu gel
      </Text>
      <S.RowContainer>
        <S.TextWithPadding size="M" family="BOLD">
          100
        </S.TextWithPadding>
        <Text>lei</Text>
      </S.RowContainer>
    </S.RowContainer>
    <S.RowContainer>
      <Text>Oana Profir</Text>
      <S.RowContainer>
        <S.TextWithPadding size="M" family="BOLD">
          5
        </S.TextWithPadding>
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
