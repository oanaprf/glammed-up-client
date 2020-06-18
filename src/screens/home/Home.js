import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';

import { t } from '@@config';
import { ServiceDetailsModal, BookAppointmentModal } from '@@screens/modals';
import { ButtonText } from '@@components';

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
        <MostPopularServices />
        <Services />
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
