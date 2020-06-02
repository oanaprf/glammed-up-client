/* eslint-disable react/jsx-key */
import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Icon } from 'react-native-elements';

import { Text } from '@@components';
import { t } from '@@config';

import { Login, SignUp } from './components';
import * as S from './styled';

const Auth = () => (
  <>
    <S.Container>
      <S.StyledTitle>
        <Icon
          {...{
            name: 'spa-outline',
            type: 'material-community',
            color: 'white',
            size: 50,
          }}
        />
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
