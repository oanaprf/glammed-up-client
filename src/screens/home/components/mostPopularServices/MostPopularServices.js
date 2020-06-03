import React from 'react';
import { ScrollView } from 'react-native';

import { t } from '@@config';
import { Text } from '@@components';

import { ServiceDetails } from './components';
import * as S from './styled';

const MostPopularServices = () => (
  <S.TopServicesContainer>
    <Text size="M" family="BOLD">
      {t('home.mostPopular')}
    </Text>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingVertical: 5,
      }}
    >
      {[0, 1, 2].map(v => (
        <S.StyledService key={v} ServiceDetails={ServiceDetails} />
      ))}
    </ScrollView>
  </S.TopServicesContainer>
);

export default MostPopularServices;
