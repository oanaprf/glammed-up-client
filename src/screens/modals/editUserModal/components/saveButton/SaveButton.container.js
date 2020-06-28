import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { U } from '@@utils';
import { withCloseModal } from '@@hocs';
import { user } from '@@store/modules';

import BaseSaveButton from './SaveButton';

const SaveButton = compose(
  withCloseModal,
  connect(
    state => ({
      currentUserId: user.selectors.getCurrentUserId(state),
    }),
    {
      editUser: user.actions.editUser,
    }
  ),
  withHandlers({
    onSave: ({
      formValues,
      setSubmitting,
      editUser,
      closeModal,
      currentUserId,
    }) => () => {
      setSubmitting(true);
      if (U.isFormValid(formValues)) {
        editUser(currentUserId, formValues);
        closeModal();
      }
    },
  })
)(BaseSaveButton);

export default SaveButton;
