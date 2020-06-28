import { compose, withHandlers } from 'recompose';
import getOr from 'lodash/fp/getOr';

import { withLabel } from '@@hocs';

import BaseDate from './Date';

const Date = compose(
  withLabel('appointments.fields.date'),
  withHandlers({
    onChange: ({
      fetchFreeSpots,
      currentUserId,
      serviceNames,
      formValues,
      setFormValues,
    }) => ({ dateString }) => {
      setFormValues({ ...formValues, date: dateString });
      fetchFreeSpots(
        currentUserId,
        dateString,
        getOr(60, '[0].duration', serviceNames)
      );
    },
  })
)(BaseDate);

export default Date;
