import React from 'react';
import { ScrollView } from 'react-native';

import { Spacer } from '@@components';
import Service from './service';

const ServiceList = () => (
  <>
    <Spacer height={10} />
    <ScrollView
      contentContainerStyle={{
        paddingVertical: 5,
        flexGrow: 1,
        alignItems: 'center',
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
