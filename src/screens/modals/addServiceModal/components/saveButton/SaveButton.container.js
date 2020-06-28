import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { U } from '@@utils';
import { withCloseModal } from '@@hocs';
import { services, user } from '@@store/modules';

import BaseSaveButton from './SaveButton';

const SaveButton = compose(
  withCloseModal,
  connect(
    state => ({
      currentUserId: user.selectors.getCurrentUserId(state),
    }),
    {
      addService: services.actions.addService,
    }
  ),
  withHandlers({
    onSave: ({
      formValues,
      setSubmitting,
      addService,
      closeModal,
      currentUserId,
    }) => () => {
      setSubmitting(true);
      if (U.isFormValid(formValues)) {
        addService({ ...formValues, providerId: currentUserId });
        closeModal();
      }
    },
  })
)(BaseSaveButton);

export default SaveButton;
