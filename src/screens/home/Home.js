import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { Text, Card, Spacer, Dropdown, NumberSpinner } from '@@components';

const Home = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    }}
  >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
          style={{ width: '80%', zIndex: 1 }}
          dark
          placeholder="Category"
        />
        <Spacer />
        <NumberSpinner />
      </Card>
    </TouchableWithoutFeedback>
  </View>
);

export default Home;
