/* eslint-disable react/jsx-key */
import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

import { Text } from '@@components';
import { t, theme } from '@@config';

import { Login } from './components';
import * as S from './styled';

const Auth = () => (
  <>
    <S.StyledSafeAreaView />
    <S.Container>
      <S.TopBackground
        colors={[
          theme.colors.theme_timber.primary,
          theme.colors.theme_timber.secondary,
        ]}
      >
        {/* <S.Logo source={require('@@assets/final_logo.png')} /> */}
      </S.TopBackground>
      <S.BottomBackground />
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
