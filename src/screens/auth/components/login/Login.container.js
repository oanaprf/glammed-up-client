import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { withUseState } from '@@hocs';
import { user } from '@@store/modules';
import { U } from '@@utils';

import BaseLogin from './Login';

const Login = compose(
  withUseState('formValues', {
    email: 'testtest1@gmail.com',
    password: 'testtest1',
  }),
  withUseState('submitting', false),
  connect(null, {
    login: user.actions.login,
    loginFacebook: user.actions.loginFacebook,
    loginGoogle: user.actions.loginGoogle,
  }),
  withHandlers({
    onLogin: ({ login, formValues, setSubmitting }) => () => {
      setSubmitting(true);
      if (U.isFormValid(formValues)) login(formValues);
    },
    onFacebookLogin: ({ loginFacebook }) => () => loginFacebook(),
    onGoogleLogin: ({ loginGoogle }) => () => loginGoogle(),
  })
)(BaseLogin);

export default Login;
