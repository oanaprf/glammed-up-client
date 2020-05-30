import React from 'react';
import { ScrollView } from 'react-native';

import { Spacer } from '@@components';
import Service from './service';

const Services = () => (
  <>
    <Spacer height={10} />
    <ScrollView
      contentContainerStyle={{
        paddingVertical: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
      }}
    >
      <Service />
      <Service />
      <Service />
      <Service />
    </ScrollView>
  </>
);

export default Services;
