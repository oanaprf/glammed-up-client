import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { withUseState } from '@@hocs';
import { user } from '@@store/modules';

import BaseSignUp from './SignUp';

const SignUp = compose(
  withUseState('formValues', {
    firstName: 'first',
    lastName: 'user',
    email: 'first.user@gmail.com',
    password: 'first.user',
  }),
  connect(null, {
    signUp: user.actions.signUp,
  }),
  withHandlers({
    onChange: ({ formValues, setFormValues }) => ({
      nativeEvent: { target, text },
    }) => setFormValues({ ...formValues, [`${target.name}`]: text }),
    onPress: ({ signUp, formValues }) => () => signUp(formValues),
  })
)(BaseSignUp);

export default SignUp;
