import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';

import { ServiceDetails } from './components';
import * as S from './styled';

const MostPopularServices = ({ services }) => (
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
);

MostPopularServices.propTypes = {
  services: PropTypes.array,
};

export default MostPopularServices;
