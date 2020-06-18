import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';

import { t } from '@@config';
import { Text } from '@@components';

import { ServiceDetails } from './components';
import * as S from './styled';

const MostPopularServices = ({ services }) => (
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
      {services.map(service => (
        <S.StyledService
          key={service._id}
          ServiceDetails={ServiceDetails}
          service={service}
        />
      ))}
    </ScrollView>
  </S.TopServicesContainer>
);

MostPopularServices.propTypes = {
  services: PropTypes.array,
};

export default MostPopularServices;
