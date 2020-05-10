import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import PropTypes from 'prop-types';

import {
  Text,
  Card,
  Spacer,
  Button,
  TextInput,
  PasswordInput,
} from '@@components';
import { t } from '@@config';

const Auth = ({ formValues, setFormValues, login }) => (
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
          height: '80%',
          width: '80%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>{t('login.pageName')}</Text>
        <Spacer />
        <TextInput
          placeholder="Email"
          rounded
          style={{ width: '80%' }}
          value={formValues.email}
          onChangeText={value => setFormValues({ ...formValues, email: value })}
        />
        <Spacer />
        <PasswordInput
          placeholder="Password"
          rounded
          style={{ width: '80%' }}
          value={formValues.password}
          onChangeText={value =>
            setFormValues({ ...formValues, password: value })
          }
        />
        <Spacer />
        <Button rounded onPress={() => login(formValues)}>
          <Text style={{ color: 'white' }}>Login</Text>
        </Button>
      </Card>
    </TouchableWithoutFeedback>
  </View>
);

Auth.propTypes = {
  formValues: PropTypes.object.isRequired,
  setFormValues: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

export default Auth;
