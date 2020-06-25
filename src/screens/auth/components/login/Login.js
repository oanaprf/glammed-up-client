import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

import { Spacer } from '@@components';
import { t } from '@@config';

import * as S from './styled';
import { LoginButton } from './components';
import { Email, Password } from '../common';

const Login = ({ formValues, setFormValues, onLogin, submitting }) => (
  <>
    <Spacer height={30} />
    <Email {...{ formValues, setFormValues, submitting }} />
    <S.SmallSpacer />
    <Password {...{ formValues, setFormValues, submitting }} />
    <S.MediumSpacer />
    <LoginButton onPress={onLogin} />
    <S.SmallSpacer />
    <TouchableOpacity activeOpacity={0.6}>
      <S.CenteredText size="XS">{t('login.forgotPassword')}</S.CenteredText>
    </TouchableOpacity>
    {/* <S.SmallSpacer />
    <S.HorizontalBarWrapper>
      <S.HorizontalBar />
      <S.PaddedText>{t('login.or')}</S.PaddedText>
      <S.HorizontalBar />
    </S.HorizontalBarWrapper>
    <S.CenteredText>{t('login.signInWithSocial')}</S.CenteredText>
    <S.SmallSpacer />
    <S.SocialIconsWrapper>
      <SocialLoginButton onPress={onFacebookLogin} type="facebook" />
      <SocialLoginButton onPress={onGoogleLogin} type="google" />
    </S.SocialIconsWrapper> */}
  </>
);

Login.propTypes = {
  formValues: PropTypes.object.isRequired,
  onLogin: PropTypes.func.isRequired,
  setFormValues: PropTypes.func.isRequired,
  onFacebookLogin: PropTypes.func.isRequired,
  onGoogleLogin: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default Login;
