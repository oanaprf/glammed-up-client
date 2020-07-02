import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { U } from '@@utils';
import { user, reviews } from '@@store/modules';

import BaseSaveButton from './SaveButton';

const today = new Date();

const SaveButton = compose(
  connect(
    state => ({
      currentUserId: user.selectors.getCurrentUserId(state),
    }),
    {
      addReview: reviews.actions.addReview,
    }
  ),
  withHandlers({
    onSave: ({
      formValues,
      setSubmitting,
      addReview,
      onCloseModal,
      currentUserId,
      service,
    }) => () => {
      setSubmitting(true);
      if (U.isFormValid(formValues)) {
        addReview({
          ...formValues,
          serviceId: service._id,
          providerId: service.provider._id,
          clientId: currentUserId,
          date: today,
        });
        onCloseModal();
      }
    },
  })
)(BaseSaveButton);

export default SaveButton;
