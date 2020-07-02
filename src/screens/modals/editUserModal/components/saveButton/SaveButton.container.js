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
      if (
        U.isFormValid({
          firstName: formValues.firstName,
          lastName: formValues.lastName,
        })
      ) {
        editUser(currentUserId, {
          firstName: formValues.firstName,
          lastName: formValues.lastName,
          ...(formValues.profilePicture && {
            profilePicture: formValues.profilePicture,
          }),
          ...(formValues.phoneNumber && {
            phoneNumber: formValues.phoneNumber,
          }),
          ...(formValues.address && { address: formValues.address }),
        });
        closeModal();
      }
    },
  })
)(BaseSaveButton);

export default SaveButton;
