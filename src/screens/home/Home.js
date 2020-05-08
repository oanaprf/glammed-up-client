import React from 'react';
import { View } from 'react-native';

import { Text, Card, Spacer, Dropdown } from '@@components';

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
      <Spacer />
      <Dropdown
        options={['NAILS', 'MAKE_UP', 'WAXING']}
        style={{ width: '80%' }}
        dark
        placeholder="Category"
      />
    </Card>
  </View>
);

export default Home;
