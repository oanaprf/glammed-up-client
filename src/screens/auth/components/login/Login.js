import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import { t } from '@@config';

import * as S from './styled';
import { LoginButton, Email, Password } from './components';

const Login = ({ formValues, onChange, onPress }) => (
  <>
    <S.MediumSpacer />
    <Email value={formValues.email} onChange={onChange} />
    <S.SmallSpacer />
    <Password value={formValues.password} onChange={onChange} />
    <S.MediumSpacer />
    <LoginButton onPress={onPress} />
    <S.SmallSpacer />
    <TouchableOpacity>
      <S.ItalicText>{t('login.forgotPassword')}</S.ItalicText>
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
      <S.PaddedTouchableOpacity>
        <Icon
          {...{ name: 'social-facebook', type: 'simple-line-icon', size: 30 }}
        />
      </S.PaddedTouchableOpacity>
      <S.PaddedTouchableOpacity>
        <Icon
          {...{ name: 'social-google', type: 'simple-line-icon', size: 30 }}
        />
      </S.PaddedTouchableOpacity>
    </S.SocialIconsWrapper>
  </>
);

Login.propTypes = {
  formValues: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Login;
