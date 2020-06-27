import { compose, withProps, withHandlers } from 'recompose';

import { withLabel } from '@@hocs';

import BaseName from './Name';

const Name = compose(
  withLabel('service.fields.name'),
  withProps(({ formValues }) => ({
    value: formValues.name,
  })),
  withHandlers({
    onChangeText: ({ formValues, setFormValues }) => value =>
      setFormValues({ ...formValues, name: value }),
  })
)(BaseName);

export default Name;
