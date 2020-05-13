import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import {
  Text,
  Card,
  Spacer,
  Button,
  TextInput,
  PasswordInput,
  Tabs,
} from '@@components';
import { t } from '@@config';

const Auth = () => (
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
          paddingTop: 40,
        }}
      >
        <Tabs
          tabLabels={[
            <Text key={1}>{t('login.pageName')}</Text>,
            <Text key={2}>Sign up</Text>,
          ]}
          tabContents={[
            <View key={2}>
              <TextInput placeholder="Email" rounded />
              <Spacer />
              <PasswordInput placeholder="Password" rounded />
              <Spacer />
              <Button rounded>
                <Text style={{ color: 'white' }}>Login</Text>
              </Button>
            </View>,
            <View key={1}>
              <TextInput placeholder="Fullname" rounded />
              <Spacer />
              <TextInput placeholder="Email" rounded />
              <Spacer />
              <PasswordInput placeholder="Password" rounded />
              <Spacer />
              <Button rounded>
                <Text style={{ color: 'white' }}>Sign up</Text>
              </Button>
            </View>,
          ]}
        />
      </Card>
    </TouchableWithoutFeedback>
  </View>
);

export default Auth;
