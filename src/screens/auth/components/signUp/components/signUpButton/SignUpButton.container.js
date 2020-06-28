import { connect } from 'react-redux';
import { auth } from '@@store/middlewares';

import BaseSignUpButton from './SignUpButton';

const SignUpButton = connect(state => ({
  isLoading: auth.selectors.isLoading(state),
}))(BaseSignUpButton);

export default SignUpButton;
