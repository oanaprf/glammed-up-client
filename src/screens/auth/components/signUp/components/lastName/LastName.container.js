import { compose, withProps, withHandlers } from 'recompose';

import { withLabel } from '@@hocs';

import BaseLastName from './LastName';

const LastName = compose(
  withLabel('signUp.fields.lastName'),
  withProps(({ formValues }) => ({ value: formValues.lastName })),
  withHandlers({
    onChangeText: ({ formValues, setFormValues }) => value =>
      setFormValues({ ...formValues, lastName: value }),
  })
)(BaseLastName);

export default LastName;
