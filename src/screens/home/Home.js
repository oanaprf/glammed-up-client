import React from 'react';
import { View } from 'react-native';

import { Text } from '@@components';

const Home = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    }}
  >
    <Text>Home</Text>
  </View>
);

export default Home;
