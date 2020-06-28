import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { auth } from '@@store/middlewares';
import { withOpenModal } from '@@hocs';
import * as C from '@@utils/constants';

import BaseCredentials from './Credentials';

const Credentials = compose(
  connect(state => ({
    currentUser: auth.selectors.getUserData(state),
  })),
  withOpenModal,
  withHandlers({
    onPress: ({ openModal, currentUser }) => () =>
      openModal({ name: C.MODALS.EDIT_CREDENTIALS_MODAL, data: currentUser }),
  })
)(BaseCredentials);

export default Credentials;
