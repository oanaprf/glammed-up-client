import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { withUseState } from '@@hocs';
import { user } from '@@store/modules';
import { U } from '@@utils';

import BaseSignUp from './SignUp';

const SignUp = compose(
  withUseState('formValues', {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }),
  withUseState('submitting', false),
  connect(null, {
    signUp: user.actions.signUp,
  }),
  withHandlers({
    onPress: ({ signUp, formValues, setSubmitting }) => () => {
      setSubmitting(true);
      if (U.isFormValid(formValues)) signUp(formValues);
    },
  })
)(BaseSignUp);

export default SignUp;
