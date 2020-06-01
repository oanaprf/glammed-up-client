import React from 'react';
import { ScrollView } from 'react-native';

import { t } from '@@config';

import Service from './service';
import * as S from './styled';

const TopServices = () => (
  <S.TopServicesContainer>
    <S.StyledText>{t('home.mostPopular')}</S.StyledText>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingVertical: 5,
      }}
    >
      <Service />
      <Service />
      <Service />
    </ScrollView>
  </S.TopServicesContainer>
);

export default TopServices;
