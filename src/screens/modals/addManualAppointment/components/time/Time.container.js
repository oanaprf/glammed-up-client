import { compose, withProps } from 'recompose';

import { withLabel } from '@@hocs';

import BaseTime from './Time';

const mapFreeSpotsToOptions = value => ({
  key: value,
  value,
});

const Time = compose(
  withLabel('appointments.fields.time'),
  withProps(({ freeSpots }) => ({
    options: freeSpots.map(mapFreeSpotsToOptions),
  }))
)(BaseTime);

export default Time;
