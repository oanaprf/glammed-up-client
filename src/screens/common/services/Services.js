import React from 'react';
import { View } from 'react-native';

import { Spacer } from '@@components';
import Service from './service';

const Services = () => (
  <>
    <Spacer height={10} />
    <View>
      <Service />
      <Service />
      <Service />
      <Service />
      <Service />
      <Service />
      <Service />
    </View>
  </>
);

export default Services;
