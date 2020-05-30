/* eslint-disable react/jsx-key */
import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

import { Text } from '@@components';
import { t } from '@@config';

import { Login, SignUp } from './components';
import * as S from './styled';

const logo = require('@@assets/logo.png');

const Auth = () => (
  <>
    <S.Container>
      <S.StyledTitle>
        <S.StyledLogo source={logo} />
        <S.TitleText>GLAMMED UP</S.TitleText>
      </S.StyledTitle>
      <S.StyledCard>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <S.StyledTabs
            tabLabels={[
              <Text>{t('login.pageName')}</Text>,
              <Text>{t('signUp.pageName')}</Text>,
            ]}
            tabContents={[<Login />, <SignUp />]}
          />
        </TouchableWithoutFeedback>
      </S.StyledCard>
    </S.Container>
  </>
);

export default Auth;
