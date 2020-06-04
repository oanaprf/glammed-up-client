import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';

import { t } from '@@config';
import { Service } from '@@screens/common';
import { ServiceDetailsModal, BookAppointmentModal } from '@@screens/modals';
import { Spacer, ButtonText, Text } from '@@components';

import * as S from './styled';
import { SettingsButton, MostPopularServices } from './components';

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
        <MostPopularServices />
        <Text size="M" family="BOLD">
          {t('home.allServices')}
        </Text>
        <Spacer height={5} />
        {[0, 1, 2].map(v => (
          <Service key={v} />
        ))}
      </ScrollView>
    </S.Body>
    <ServiceDetailsModal />
    <BookAppointmentModal />
  </S.Container>
);

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Home;
