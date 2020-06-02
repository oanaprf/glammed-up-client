import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';

import { t } from '@@config';
import { Service } from '@@screens/common';
import { ServiceDetailsModal, CreateAppointmentModal } from '@@screens/modals';
import { Spacer } from '@@components';

import * as S from './styled';
import { SettingsButton, MostPopularServices } from './components';

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
        <MostPopularServices />
        <S.StyledText>{t('home.allServices')}</S.StyledText>
        <Spacer height={5} />
        {[0, 1, 2].map(v => (
          <Service key={v} />
        ))}
      </ScrollView>
    </S.Body>
    <ServiceDetailsModal />
    <CreateAppointmentModal />
  </S.Container>
);

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Home;
