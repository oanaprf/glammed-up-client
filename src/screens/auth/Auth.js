/* eslint-disable react/jsx-key */
import React from 'react';
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';

import { Text } from '@@components';
import { t, theme } from '@@config';

import { Login } from './components';
import * as S from './styled';

const Auth = () => (
  <>
    <S.Container>
      <S.TopBackground
        colors={[
          theme.colors.theme_sublime_light.primary,
          theme.colors.theme_sublime_light.secondary,
        ]}
      >
        <View style={{ position: 'absolute', top: '18%' }}>
          <Text style={{ color: 'white', fontSize: 45 }}>GLAMMED UP</Text>
        </View>
      </S.TopBackground>
      <S.StyledCard>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <S.StyledTabs
            tabLabels={[<Text>{t('login.pageName')}</Text>]}
            tabContents={[<Login />]}
          />
        </TouchableWithoutFeedback>
      </S.StyledCard>
    </S.Container>
  </>
);

export default Auth;
