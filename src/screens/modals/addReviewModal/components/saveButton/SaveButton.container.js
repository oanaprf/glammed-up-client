import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { U } from '@@utils';
import { withCloseModal } from '@@hocs';
import { user, reviews } from '@@store/modules';

import BaseSaveButton from './SaveButton';

const today = new Date();

const SaveButton = compose(
  withCloseModal,
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
      closeModal,
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
        closeModal();
      }
    },
  })
)(BaseSaveButton);

export default SaveButton;
