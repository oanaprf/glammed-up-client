import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';

import { t } from '@@config';
import {
  ServiceDetailsModal,
  BookAppointmentModal,
  ApproveAppointmentModal,
} from '@@screens/modals';
import { ButtonText, Text, Spacer } from '@@components';

import * as S from './styled';
import { SettingsButton, MostPopularServices, Services } from './components';

const Home = ({ navigation }) => (
  <S.Container>
    <S.Header>
      <ButtonText size="XL" family="REGULAR">
        {t('home.pageName')}
      </ButtonText>
      <SettingsButton navigation={navigation} />
    </S.Header>
    <S.Body>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 10,
        }}
      >
        <Spacer height={10} />
        <Text size="M" family="BOLD">
          {t('home.mostPopular')}
        </Text>
        <MostPopularServices />
        <Text size="M" family="BOLD">
          {t('home.allServices')}
        </Text>
        <Spacer height={5} />
        <Services />
      </ScrollView>
    </S.Body>
    <ServiceDetailsModal />
    <BookAppointmentModal />
    <ApproveAppointmentModal />
  </S.Container>
);

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Home;
