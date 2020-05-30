import React from 'react';
import { Icon } from 'react-native-elements';

import { theme } from '@@config';
import * as S from './styled';

const ServiceInfo = () => (
  <S.InfoContainer>
    <S.ServiceInfoContainer>
      <S.ServiceNameText numberOfLines={1}>Unghii cu gels</S.ServiceNameText>
      <S.ProviderNameText>by Narcisa Petcu </S.ProviderNameText>
    </S.ServiceInfoContainer>
    <S.RatingContainer>
      <S.ServiceNameText>{'4.5'}</S.ServiceNameText>
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
