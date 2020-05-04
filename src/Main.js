import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';

import { theme } from '@@config';
import { TextInput, PasswordInput, NumericInput, Spacer } from '@@components';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
  },
  card: {
    height: '50%',
    width: '80%',
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    borderRadius: 7,
    paddingRight: 20,
    paddingLeft: 20,
    elevation: 15,
  },
});

const Main = () => (
  <View style={styles.container}>
    <View style={styles.card}>
      <TextInput
        dark
        placeholder="Email"
        Icon={
          <Icon
            {...{
              name: 'mail',
              type: 'feather',
              size: 20,
              color: theme.colors.grey,
            }}
          />
        }
      />
      <Spacer />
      <PasswordInput dark placeholder="Password" />
      <Spacer />
      <NumericInput dark placeholder="Phone" />
    </View>
  </View>
);

export default Main;
