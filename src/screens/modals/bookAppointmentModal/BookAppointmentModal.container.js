import { connect } from 'react-redux';

import { modal } from '@@store/modules';
import BaseBookAppointmentModal from './BookAppointmentModal';

const BookAppointmentModal = connect(state => ({
  service: modal.selectors.getModalData(state),
}))(BaseBookAppointmentModal);

export default BookAppointmentModal;
