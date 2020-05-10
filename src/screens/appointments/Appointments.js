import React from 'react';
import { View } from 'react-native';

import { Text } from '@@components';
import { t } from '@@config';

const Appointments = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    }}
  >
    <Text>{t('appointments.pageName')}</Text>
  </View>
);

export default Appointments;
