import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { U } from '@@utils';
import { services, user } from '@@store/modules';

import BaseSaveButton from './SaveButton';

const SaveButton = compose(
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
      currentUserId,
      onCloseModal,
    }) => () => {
      setSubmitting(true);
      if (U.isFormValid(formValues)) {
        addService({ ...formValues, providerId: currentUserId });
        onCloseModal();
      }
    },
  })
)(BaseSaveButton);

export default SaveButton;
