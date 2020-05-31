import React from 'react';
import { ScrollView } from 'react-native';

import { t } from '@@config';
import { Services } from '@@screens/common';

import * as S from './styled';

const Home = () => (
  <S.Container>
    <S.Header>
      <S.Title>{t('home.pageName')}</S.Title>
    </S.Header>
    <S.Body>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
        }}
      >
        <Services />
      </ScrollView>
    </S.Body>
  </S.Container>
);

export default Home;
