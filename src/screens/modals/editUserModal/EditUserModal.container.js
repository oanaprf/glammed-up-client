import { compose, withPropsOnChange, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { withUseState } from '@@hocs';
import { modal } from '@@store/modules';
import {
  getFirstName,
  getLastName,
  getPhoneNumber,
  getAddress,
} from '@@store/modules/user/selectors';

import BaseEditUserModal from './EditUserModal';

const EditUserModal = compose(
  connect(state => ({
    user: modal.selectors.getModalData(state),
  })),
  withUseState('formValues', {
    firstName: '',
    lastName: '',
    profilePicture: '',
    phoneNumber: '',
    address: '',
  }),
  withPropsOnChange(['user'], ({ user, setFormValues }) =>
    setFormValues({
      firstName: getFirstName(user),
      lastName: getLastName(user),
      profilePicture: user.profilePicture,
      phoneNumber: getPhoneNumber(user),
      address: getAddress(user),
    })
  ),
  withUseState('submitting', false),
  withHandlers({
    onCloseModal: ({ setFormValues, user, setSubmitting }) => () => {
      setSubmitting(false);
      setFormValues({
        firstName: getFirstName(user),
        lastName: getLastName(user),
        profilePicture: user.profilePicture,
        phoneNumber: getPhoneNumber(user),
        address: getAddress(user),
      });
    },
  })
)(BaseEditUserModal);

export default EditUserModal;
