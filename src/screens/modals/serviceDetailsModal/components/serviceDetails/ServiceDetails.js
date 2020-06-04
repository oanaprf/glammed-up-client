import React from 'react';
import { View } from 'react-native';

import { Spacer } from '@@components';
import { ServiceInfo } from '@@screens/common';

import { ProviderInfo } from './components';

const ServiceDetails = () => (
  <View>
    <ServiceInfo />
    <Spacer height={15} />
    <ProviderInfo />
    <Spacer height={15} />
  </View>
);

export default ServiceDetails;
