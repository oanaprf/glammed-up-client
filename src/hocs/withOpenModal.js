import { connect } from 'react-redux';

import { modal } from '@@store/modules';

export default connect(null, {
  openModal: modal.actions.openModal,
});
