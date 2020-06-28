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
      logout: user.actions.logout,
    }
  ),
  withHandlers({
    onSave: ({
      formValues,
      setSubmitting,
      editUser,
      logout,
      closeModal,
      currentUserId,
    }) => () => {
      setSubmitting(true);
      const actualValues = {
        ...(formValues.email && { email: formValues.email }),
        ...(formValues.password && { password: formValues.password }),
      };
      if (U.isFormValid(actualValues)) {
        editUser(currentUserId, actualValues);
        logout();
        closeModal();
      }
    },
  })
)(BaseSaveButton);

export default SaveButton;
