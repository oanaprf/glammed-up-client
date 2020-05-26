import React from 'react';
import PropTypes from 'prop-types';

import { t } from '@@config';
import { Button } from '@@components';

import * as S from './styled';

const SignUpButton = ({ onPress }) => (
  <Button rounded onPress={onPress}>
    <S.StyledText>{t('signUp.signUpButton')}</S.StyledText>
  </Button>
);

SignUpButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default SignUpButton;
