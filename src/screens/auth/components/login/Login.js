import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

import { Spacer } from '@@components';
import { t } from '@@config';

import * as S from './styled';
import { LoginButton, SocialLoginButton } from './components';
import { Email, Password } from '../common';

const Login = ({
  formValues,
  onChange,
  onLogin,
  onFacebookLogin,
  onGoogleLogin,
}) => (
  <>
    <Spacer height={30} />
    <Email value={formValues.email} onChange={onChange} />
    <S.SmallSpacer />
    <Password value={formValues.password} onChange={onChange} />
    <S.MediumSpacer />
    <LoginButton onPress={onLogin} />
    <S.SmallSpacer />
    <TouchableOpacity activeOpacity={0.6}>
      <S.ForgotPasswordText size="XS">
        {t('login.forgotPassword')}
      </S.ForgotPasswordText>
    </TouchableOpacity>
    <S.SmallSpacer />
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
    </S.SocialIconsWrapper>
  </>
);

Login.propTypes = {
  formValues: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  onFacebookLogin: PropTypes.func.isRequired,
  onGoogleLogin: PropTypes.func.isRequired,
};

export default Login;
