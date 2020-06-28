import { connect } from 'react-redux';
import { auth } from '@@store/middlewares';

import BaseLoginButton from './LoginButton';

const LoginButton = connect(state => ({
  isLoading: auth.selectors.isLoading(state),
}))(BaseLoginButton);

export default LoginButton;
