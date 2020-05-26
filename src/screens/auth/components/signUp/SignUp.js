import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

import { t } from '@@config';

import * as S from './styled';
import { SignUpButton, FirstName, LastName } from './components';
import { Email, Password } from '../common';

const SignUp = ({ formValues, onChange, onPress }) => (
  <>
    <S.MediumSpacer />
    <FirstName value={formValues.firstName} onChange={onChange} />
    <S.SmallSpacer />
    <LastName value={formValues.lastName} onChange={onChange} />
    <S.SmallSpacer />
    <Email value={formValues.email} onChange={onChange} />
    <S.SmallSpacer />
    <Password value={formValues.password} onChange={onChange} />
    <S.MediumSpacer />
    <SignUpButton onPress={onPress} />
    <S.SmallSpacer />
    <S.HorizontalBarWrapper>
      <S.HorizontalBar />
      <S.PaddedText>{t('login.or')}</S.PaddedText>
      <S.HorizontalBar />
    </S.HorizontalBarWrapper>
    <S.CenteredText>{t('signUp.signInWithSocial')}</S.CenteredText>
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

SignUp.propTypes = {
  formValues: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default SignUp;
