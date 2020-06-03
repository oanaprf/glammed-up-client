import React from 'react';
import { ScrollView } from 'react-native';

import { Spacer } from '@@components';

import Appointment from './appointment';

const Appointments = () => (
  <>
    <Spacer height={10} />
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingVertical: 5,
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
      }}
    >
      <Appointment />
      <Appointment />
      <Appointment />
    </ScrollView>
  </>
);

export default Appointments;
