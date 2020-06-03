import React from 'react';
import { Icon } from 'react-native-elements';

import { theme } from '@@config';
import { Text } from '@@components';
import * as S from './styled';

const ServiceDetails = () => (
  <S.ServiceDetailsContainer>
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
  </S.ServiceDetailsContainer>
);

export default ServiceDetails;
