import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { modal, appointments } from '@@store/modules';
import BaseCompleteAppointmentModal from './CompleteAppointmentModal';

const CompleteAppointmentModal = compose(
  connect(
    state => ({
      appointment: modal.selectors.getModalData(state),
    }),
    {
      completeAppointment: appointments.actions.completeAppointment,
      closeModal: modal.actions.closeModal,
    }
  ),
  withHandlers({
    onPressYes: ({ appointment, completeAppointment, closeModal }) => () => {
      completeAppointment(appointment._id);
      closeModal();
    },
    onPressNo: ({ closeModal }) => () => closeModal(),
  })
)(BaseCompleteAppointmentModal);

export default CompleteAppointmentModal;
