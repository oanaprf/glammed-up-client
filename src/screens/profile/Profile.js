import React from 'react';
import { View } from 'react-native';

import { Text } from '@@components';
import { t } from '@@config';

const Profile = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    }}
  >
    <Text>{t('profile.pageName')}</Text>
  </View>
);

export default Profile;
