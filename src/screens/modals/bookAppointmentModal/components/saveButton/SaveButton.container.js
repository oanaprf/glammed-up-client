import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { U } from '@@utils';
import { withCloseModal } from '@@hocs';
import { appointments } from '@@store/modules';

import BaseSaveButton from './SaveButton';

const SaveButton = compose(
  withCloseModal,
  connect(null, {
    bookAppointment: appointments.actions.bookAppointment,
  }),
  withHandlers({
    onSave: ({
      service,
      formValues,
      setSubmitting,
      bookAppointment,
      closeModal,
    }) => () => {
      setSubmitting(true);
      if (U.isFormValid(formValues)) {
        const date = new Date(formValues.date);
        date.setUTCHours(+formValues.time.split(':')[0]);
        date.setUTCMinutes(+formValues.time.split(':')[1]);
        bookAppointment({
          serviceId: service._id,
          providerId: service.providerId,
          clientId: formValues.clientId,
          date,
        });
        closeModal();
      }
    },
  })
)(BaseSaveButton);

export default SaveButton;
