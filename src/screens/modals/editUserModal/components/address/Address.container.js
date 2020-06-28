import { compose, withProps, withHandlers } from 'recompose';

import { withLabel } from '@@hocs';

import BaseAddress from './Address';

const Address = compose(
  withLabel('profile.fields.address'),
  withProps(({ formValues }) => ({
    value: formValues.address,
  })),
  withHandlers({
    onChangeText: ({ formValues, setFormValues }) => value =>
      setFormValues({ ...formValues, address: value }),
  })
)(BaseAddress);

export default Address;
