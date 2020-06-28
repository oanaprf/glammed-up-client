import { compose } from 'recompose';
import { connect } from 'react-redux';
import getOr from 'lodash/fp/getOr';
import isEmpty from 'lodash/fp/isEmpty';

import { modal, appointments, user } from '@@store/modules';
import { withOnMount, withUseState } from '@@hocs';
import BaseBookAppointmentModal from './BookAppointmentModal';

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

const BookAppointmentModal = compose(
  connect(
    state => ({
      service: modal.selectors.getModalData(state),
      freeSpots: appointments.selectors.getFreeSpots(state),
      currentUserId: user.selectors.getCurrentUserId(state),
    }),
    {
      fetchFreeSpots: appointments.actions.fetchFreeSpots,
    }
  ),
  withOnMount(
    ({ service, fetchFreeSpots }) =>
      !isEmpty(service) &&
      fetchFreeSpots(
        service.providerId,
        tomorrow.toJSON().substring(0, 10),
        getOr(60, 'duration', service)
      )
  ),
  withUseState('formValues', ({ currentUserId }) => ({
    clientId: currentUserId,
    date: '',
    time: '',
  })),
  withUseState('submitting', false)
)(BaseBookAppointmentModal);

export default BookAppointmentModal;
