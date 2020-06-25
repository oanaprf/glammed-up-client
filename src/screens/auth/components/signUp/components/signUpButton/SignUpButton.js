import React from 'react';
import PropTypes from 'prop-types';

import { t } from '@@config';
import { Button, ButtonText, LoaderIcon } from '@@components';

const SignUpButton = ({ onPress, isLoading }) => (
  <Button rounded onPress={onPress} disabled={isLoading}>
    {isLoading ? (
      <LoaderIcon />
    ) : (
      <ButtonText>{t('signUp.signUpButton')}</ButtonText>
    )}
  </Button>
);

SignUpButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default SignUpButton;
