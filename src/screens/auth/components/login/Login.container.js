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
  }),
  withHandlers({
    onChange: ({ formValues, setFormValues }) => ({
      nativeEvent: { target, text },
    }) =>
      setFormValues({ ...formValues, [formValues[`${target.name}`]]: text }),
    onPress: ({ login, formValues }) => () => login(formValues),
  })
)(BaseLogin);

export default Login;
