import { compose, withProps, withHandlers } from 'recompose';

import { withLabel } from '@@hocs';

import BaseDuration from './Duration';

const Duration = compose(
  withLabel('service.fields.duration'),
  withProps(({ formValues }) => ({
    value: formValues.duration,
  })),
  withHandlers({
    onChangeText: ({ formValues, setFormValues }) => value =>
      setFormValues({ ...formValues, duration: value }),
  })
)(BaseDuration);

export default Duration;
