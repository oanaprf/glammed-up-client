import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { modal, user } from '@@store/modules';
import BaseBecomeProviderModal from './BecomeProviderModal';

const BecomeProviderModal = compose(
  connect(
    state => ({
      currentUserId: user.selectors.getCurrentUserId(state),
    }),
    {
      becomeProvider: user.actions.becomeProvider,
      logout: user.actions.logout,
      closeModal: modal.actions.closeModal,
    }
  ),
  withHandlers({
    onPressYes: ({
      currentUserId,
      becomeProvider,
      closeModal,
      logout,
    }) => () => {
      becomeProvider(currentUserId);
      logout();
      closeModal();
    },
    onPressNo: ({ closeModal }) => () => closeModal(),
  })
)(BaseBecomeProviderModal);

export default BecomeProviderModal;
