import React from 'react';
import PropTypes from 'prop-types';

import { t } from '@@config';
import { Button, ButtonText } from '@@components';

const LoginButton = ({ onPress }) => (
  <Button rounded onPress={onPress}>
    <ButtonText>{t('login.loginButton')}</ButtonText>
  </Button>
);

LoginButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default LoginButton;
