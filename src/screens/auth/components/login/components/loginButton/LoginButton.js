import React from 'react';
import PropTypes from 'prop-types';

import { t } from '@@config';
import { Button } from '@@components';

import * as S from './styled';

const LoginButton = ({ onPress }) => (
  <Button rounded onPress={onPress}>
    <S.StyledText>{t('login.loginButton')}</S.StyledText>
  </Button>
);

LoginButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default LoginButton;
