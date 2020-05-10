import React from 'react';
import { View } from 'react-native';

import { Text } from '@@components';
import { t } from '@@config';

const Services = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    }}
  >
    <Text>{t('services.pageName')}</Text>
  </View>
);

export default Services;
