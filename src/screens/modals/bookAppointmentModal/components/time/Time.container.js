import { compose, withProps, withHandlers } from 'recompose';

import { withLabel } from '@@hocs';

import BaseTime from './Time';

const mapFreeSpotsToOptions = value => ({
  key: value,
  value,
});

const Time = compose(
  withLabel('appointments.fields.time'),
  withProps(({ freeSpots, formValues }) => ({
    options: freeSpots.map(mapFreeSpotsToOptions),
    value: formValues.time,
  })),
  withHandlers({
    onChangeText: ({ formValues, setFormValues }) => value =>
      setFormValues({ ...formValues, time: value }),
  })
)(BaseTime);

export default Time;
