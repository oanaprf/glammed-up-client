import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const SplashScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <ActivityIndicator size="large" color="#000000" />
  </View>
);

export default SplashScreen;
