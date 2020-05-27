import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { withUseState } from '@@hocs';
import { user } from '@@store/modules';

import BaseLogin from './Login';

const Login = compose(
  withUseState('formValues', {
    email: 'testtest@gmail.com',
    password: 'testtest',
  }),
  connect(null, {
    login: user.actions.login,
    loginFacebook: user.actions.loginFacebook,
    loginGoogle: user.actions.loginGoogle,
  }),
  withHandlers({
    onChange: ({ formValues, setFormValues }) => ({
      nativeEvent: { target, text },
    }) => setFormValues({ ...formValues, [`${target.name}`]: text }),
    onLogin: ({ login, formValues }) => () => login(formValues),
    onFacebookLogin: ({ loginFacebook }) => () => loginFacebook(),
    onGoogleLogin: ({ loginGoogle }) => () => loginGoogle(),
  })
)(BaseLogin);

export default Login;
