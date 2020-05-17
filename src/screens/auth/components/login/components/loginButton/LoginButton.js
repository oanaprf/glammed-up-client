import React from 'react';
import PropTypes from 'prop-types';

import { t } from '@@config';

import * as S from './styled';

const LoginButton = ({ onPress }) => (
  <S.StyledButton rounded onPress={onPress}>
    <S.StyledText>{t('login.loginButton')}</S.StyledText>
  </S.StyledButton>
);

LoginButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default LoginButton;
