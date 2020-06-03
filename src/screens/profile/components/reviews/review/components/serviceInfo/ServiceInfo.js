import React from 'react';
import { Icon } from 'react-native-elements';

import { Text } from '@@components';
import { theme } from '@@config';
import * as S from './styled';

const ServiceInfo = () => (
  <S.InfoContainer>
    <S.ServiceInfoContainer>
      <S.TextWithPadding family="BOLD" numberOfLines={1}>
        Unghii cu gels
      </S.TextWithPadding>
      <Text>by Narcisa Petcu </Text>
    </S.ServiceInfoContainer>
    <S.RatingContainer>
      <S.TextWithPadding family="BOLD">{'4.5'}</S.TextWithPadding>
      <Icon
        {...{
          name: 'star',
          type: 'antdesign',
          size: 18,
          color: theme.colors.warning,
        }}
      />
    </S.RatingContainer>
  </S.InfoContainer>
);

export default ServiceInfo;
