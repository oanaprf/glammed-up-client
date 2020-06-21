import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import { Spacer } from '@@components';

import Appointment from './appointment';

const AppointmentsList = ({ appointments = [] }) => (
  <>
    <Spacer height={10} />
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingVertical: 5, alignItems: 'center' }}
    >
      {appointments.map(appointment => (
        <Appointment key={appointment._id} appointment={appointment} />
      ))}
    </ScrollView>
  </>
);

AppointmentsList.propTypes = {
  appointments: PropTypes.array,
};

export default AppointmentsList;
