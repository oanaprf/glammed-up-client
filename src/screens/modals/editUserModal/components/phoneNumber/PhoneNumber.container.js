import { compose, withProps, withHandlers } from 'recompose';

import { withLabel } from '@@hocs';

import BasePhoneNumber from './PhoneNumber';

const PhoneNumber = compose(
  withLabel('profile.fields.phoneNumber'),
  withProps(({ formValues }) => ({
    value: formValues.phoneNumber,
  })),
  withHandlers({
    onChangeText: ({ formValues, setFormValues }) => value =>
      setFormValues({ ...formValues, phoneNumber: value }),
  })
)(BasePhoneNumber);

export default PhoneNumber;
