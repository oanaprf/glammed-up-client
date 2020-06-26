import { compose, withHandlers } from 'recompose';
import { withLabel } from '@@hocs';

import BaseDate from './Date';

const Date = compose(
  withLabel('appointments.fields.date'),
  withHandlers({
    onChange: ({ fetchFreeSpots, service, formValues, setFormValues }) => ({
      dateString,
    }) => {
      setFormValues({ ...formValues, date: dateString });
      fetchFreeSpots(service.providerId, dateString, service.duration);
    },
  })
)(BaseDate);

export default Date;
