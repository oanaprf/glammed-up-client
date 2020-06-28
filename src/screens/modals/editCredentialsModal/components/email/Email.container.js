import { compose, withProps, withHandlers } from 'recompose';

import { withLabel } from '@@hocs';

import BaseEmail from './Email';

const Email = compose(
  withLabel('login.fields.email'),
  withProps(({ formValues }) => ({
    value: formValues.email,
  })),
  withHandlers({
    onChangeText: ({ formValues, setFormValues }) => value =>
      setFormValues({ ...formValues, email: value }),
  })
)(BaseEmail);

export default Email;
