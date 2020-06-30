import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { modal, appointments } from '@@store/modules';
import BaseCancelAppointmentModal from './CancelAppointmentModal';

const BecomeProviderModal = compose(
  connect(
    state => ({
      appointment: modal.selectors.getModalData(state),
    }),
    {
      cancelAppointment: appointments.actions.cancelAppointment,
      closeModal: modal.actions.closeModal,
    }
  ),
  withHandlers({
    onPressYes: ({ appointment, cancelAppointment, closeModal }) => () => {
      cancelAppointment(appointment._id);
      closeModal();
    },
    onPressNo: ({ closeModal }) => () => closeModal(),
  })
)(BaseCancelAppointmentModal);

export default BecomeProviderModal;
