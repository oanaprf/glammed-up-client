import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';

import { t } from '@@config';
import { Services } from '@@screens/common';
import { ServiceDetailsModal } from '@@screens/modals';

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
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 10,
        }}
      >
        <TopServices />
        <S.StyledText>{t('home.allServices')}</S.StyledText>
        <Services />
      </ScrollView>
    </S.Body>
    <ServiceDetailsModal />
  </S.Container>
);

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Home;
