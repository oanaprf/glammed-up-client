import { compose, withPropsOnChange, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { withUseState } from '@@hocs';
import { modal } from '@@store/modules';
import { getEmail } from '@@store/modules/user/selectors';

import BaseEditCredentialsModal from './EditCredentialsModal';

const EditCredentialsModal = compose(
  connect(state => ({
    user: modal.selectors.getModalData(state),
  })),
  withUseState('formValues', {
    email: '',
    password: '',
  }),
  withPropsOnChange(['user'], ({ user, setFormValues }) =>
    setFormValues({
      email: getEmail(user),
      password: '',
    })
  ),
  withUseState('submitting', false),
  withHandlers({
    onCloseModal: ({ setFormValues, user }) => () =>
      setFormValues({
        email: getEmail(user),
        password: '',
      }),
  })
)(BaseEditCredentialsModal);

export default EditCredentialsModal;
