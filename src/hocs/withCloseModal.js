import { connect } from 'react-redux';

import { modal } from '@@store/modules';

export default connect(null, {
  closeModal: modal.actions.closeModal,
});
