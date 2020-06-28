import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { modal, appointments } from '@@store/modules';
import BaseApproveAppointmentModel from './ApproveAppointmentModal';

const ApproveAppointmentModal = compose(
  connect(
    state => ({
      data: modal.selectors.getModalData(state),
    }),
    {
      approveAppointment: appointments.actions.approveAppointment,
      rejectAppointment: appointments.actions.rejectAppointment,
      closeModal: modal.actions.closeModal,
    }
  ),
  withHandlers({
    onApprove: ({
      approveAppointment,
      closeModal,
      data: {
        appointment: { _id },
      },
    }) => () => {
      approveAppointment(_id);
      closeModal();
    },
    onReject: ({
      rejectAppointment,
      closeModal,
      data: {
        appointment: { _id },
      },
    }) => () => {
      rejectAppointment(_id);
      closeModal();
    },
  })
)(BaseApproveAppointmentModel);

export default ApproveAppointmentModal;
