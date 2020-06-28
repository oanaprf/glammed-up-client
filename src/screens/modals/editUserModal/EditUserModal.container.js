import { compose, withPropsOnChange } from 'recompose';
import { connect } from 'react-redux';

import { withUseState } from '@@hocs';
import { modal } from '@@store/modules';
import {
  getFirstName,
  getLastName,
  getPhoneNumber,
  getAddress,
} from '@@store/modules/user/selectors';
import * as C from '@@utils/constants';

import BaseEditUserModal from './EditUserModal';

const EditUserModal = compose(
  connect(state => ({
    user: modal.selectors.getModalData(state),
    isOpen: modal.selectors.isSpecificModalOpen(state, {
      name: C.MODALS.EDIT_USER,
    }),
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
  withUseState('submitting', false)
)(BaseEditUserModal);

export default EditUserModal;
