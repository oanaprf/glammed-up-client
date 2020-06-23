import { compose } from 'recompose';
import { connect } from 'react-redux';
import getOr from 'lodash/fp/getOr';

import { modal, appointments } from '@@store/modules';
import { withOnMount } from '@@hocs';
import BaseBookAppointmentModal from './BookAppointmentModal';

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

const BookAppointmentModal = compose(
  connect(
    state => ({
      service: modal.selectors.getModalData(state),
      freeSpots: appointments.selectors.getFreeSpots(state),
    }),
    {
      fetchFreeSpots: appointments.actions.fetchFreeSpots,
    }
  ),
  withOnMount(
    ({ service, fetchFreeSpots }) =>
      service &&
      fetchFreeSpots(
        service.providerId,
        tomorrow.toJSON().substring(0, 10),
        getOr(60, 'duration', service)
      )
  )
)(BaseBookAppointmentModal);

export default BookAppointmentModal;
