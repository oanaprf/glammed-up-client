import { compose, withProps, withHandlers } from 'recompose';

import { withLabel } from '@@hocs';

import BasePassword from './Password';

const Password = compose(
  withLabel('login.fields.password'),
  withProps(({ formValues }) => ({
    value: formValues.password,
  })),
  withHandlers({
    onChangeText: ({ formValues, setFormValues }) => value =>
      setFormValues({ ...formValues, password: value }),
  })
)(BasePassword);

export default Password;
