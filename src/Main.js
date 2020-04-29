import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import bla from '@@store/test';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Main = () => (
  <View style={styles.container}>
    <Text>{bla}</Text>
  </View>
);

export default Main;
