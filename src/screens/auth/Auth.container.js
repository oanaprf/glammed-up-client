import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withUseState } from '@@hocs';

import { user } from '@@store/modules';

import BaseAuth from './Auth';

const Auth = compose(
  withUseState('formValues', {
    email: 'testtest@gmail.com',
    password: 'testtest',
  }),
  connect(null, {
    login: user.actions.login,
  })
)(BaseAuth);

export default Auth;
