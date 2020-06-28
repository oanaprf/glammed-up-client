import React from 'react';
import PropTypes from 'prop-types';

import { t } from '@@config';
import { Button, ButtonText, LoaderIcon } from '@@components';

const LoginButton = ({ onPress, isLoading }) => (
  <Button rounded onPress={onPress} disabled={isLoading}>
    {isLoading ? (
      <LoaderIcon />
    ) : (
      <ButtonText>{t('login.loginButton')}</ButtonText>
    )}
  </Button>
);

LoginButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default LoginButton;
