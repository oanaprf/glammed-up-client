import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { t } from '@@config';
import { Button, ButtonText, LoaderIcon } from '@@components';
import { auth } from '@@store/middlewares';

const LoginButton = ({ onPress, isLoginLoading }) => (
  <Button rounded onPress={onPress} disabled={isLoginLoading}>
    {isLoginLoading ? (
      <LoaderIcon />
    ) : (
      <ButtonText>{t('login.loginButton')}</ButtonText>
    )}
  </Button>
);

LoginButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  isLoginLoading: PropTypes.bool.isRequired,
};

export default connect(state => ({
  isLoginLoading: auth.selectors.isLoading(state),
}))(LoginButton);
