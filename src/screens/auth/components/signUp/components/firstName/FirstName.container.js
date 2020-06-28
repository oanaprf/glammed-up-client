import { compose, withProps, withHandlers } from 'recompose';

import { withLabel } from '@@hocs';

import BaseFirstName from './FirstName';

const FirstName = compose(
  withLabel('signUp.fields.firstName'),
  withProps(({ formValues }) => ({ value: formValues.firstName })),
  withHandlers({
    onChangeText: ({ formValues, setFormValues }) => value =>
      setFormValues({ ...formValues, firstName: value }),
  })
)(BaseFirstName);

export default FirstName;
