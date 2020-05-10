import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import {
  Text,
  Card,
  Spacer,
  Dropdown,
  NumberSpinner,
  Rating,
  Button,
  TextInput,
} from '@@components';
import { t } from '@@config';

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
        <Text>{t('home.pageName')}</Text>
        <Spacer />
        <Button rounded>
          <Text style={{ color: 'white' }}>Press me</Text>
        </Button>
        <Spacer />
        <TextInput placeholder="Test" rounded style={{ width: '80%' }} />
        <Spacer />
        <Dropdown
          options={['NAILS', 'MAKE_UP', 'WAXING']}
          style={{ width: '80%', zIndex: 1 }}
          dark
          rounded
          placeholder="Category"
        />
        <Spacer />
        <NumberSpinner rounded />
        <Spacer />
        <Rating />
      </Card>
    </TouchableWithoutFeedback>
  </View>
);

export default Home;
