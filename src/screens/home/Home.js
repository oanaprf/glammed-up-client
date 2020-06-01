import React from 'react';
import { ScrollView } from 'react-native';

import { t } from '@@config';
import { Services } from '@@screens/common';
import { Spacer } from '@@components';
import PropTypes from 'prop-types';

import * as S from './styled';
import { SettingsButton, TopServices } from './components';

const Home = ({ navigation }) => (
  <S.Container>
    <S.Header>
      <S.Title>{t('home.pageName')}</S.Title>
      <SettingsButton navigation={navigation} />
    </S.Header>
    <S.Body>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
        }}
        nestedScrollEnabled={true}
      >
        <TopServices />
        <Spacer height={10} />
        <S.StyledText>{t('home.allServices')}</S.StyledText>
        <Services />
      </ScrollView>
    </S.Body>
  </S.Container>
);

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Home;
