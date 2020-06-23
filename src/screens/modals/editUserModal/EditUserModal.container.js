import { connect } from 'react-redux';

import { modal } from '@@store/modules';
import BaseEditUserModal from './EditUserModal';

const EditUserModal = connect(state => ({
  user: modal.selectors.getModalData(state),
}))(BaseEditUserModal);

export default EditUserModal;
