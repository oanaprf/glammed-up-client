import React from 'react';
import PropTypes from 'prop-types';

import { t } from '@@config';
import { Button, ButtonText } from '@@components';

const SignUpButton = ({ onPress }) => (
  <Button rounded onPress={onPress}>
    <ButtonText>{t('signUp.signUpButton')}</ButtonText>
  </Button>
);

SignUpButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default SignUpButton;
