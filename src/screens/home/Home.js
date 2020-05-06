import React from 'react';
import { View } from 'react-native';

import { Text, Card } from '@@components';

const Home = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    }}
  >
    <Card
      style={{
        height: 500,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>Home</Text>
    </Card>
  </View>
);

export default Home;
