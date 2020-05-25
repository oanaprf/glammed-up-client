import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { modal } from '@@store/modules';

import BaseModal from './Modal';

const Modal = compose(
  connect(
    (state, { name }) => ({
      isModalOpen: modal.selectors.isSpecificModalOpen(state, { name }),
    }),
    {
      closeModal: modal.actions.closeModal,
    }
  ),
  withHandlers({
    onCloseModal: ({ closeModal, onCloseModal }) => () => {
      onCloseModal && onCloseModal();
      closeModal();
    },
  })
)(BaseModal);

export default Modal;
