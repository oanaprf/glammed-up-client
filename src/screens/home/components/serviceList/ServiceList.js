import React from 'react';
import { ScrollView } from 'react-native';

import { Spacer } from '@@components';
import Service from './service';

const ServiceList = () => (
  <>
    <Spacer height={10} />
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 5,
        paddingVertical: 5,
      }}
    >
      <Service />
      <Service />
      <Service />
      <Service />
      <Service />
      <Service />
      <Service />
    </ScrollView>
  </>
);

export default ServiceList;
