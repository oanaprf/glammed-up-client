import React from 'react';
import { ScrollView } from 'react-native';

import { Spacer } from '@@components';

import Appointment from './appointment';

const AppointmentList = () => (
  <>
    <Spacer height={10} />
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingVertical: 5, alignItems: 'center' }}
    >
      <Appointment />
      <Appointment />
      <Appointment />
      <Appointment />
      <Appointment />
    </ScrollView>
  </>
);

export default AppointmentList;
