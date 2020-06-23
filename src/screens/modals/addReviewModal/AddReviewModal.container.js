import { connect } from 'react-redux';

import { modal } from '@@store/modules';
import BaseAddReviewModal from './AddReviewModal';

const AddReviewModal = connect(state => ({
  service: modal.selectors.getModalData(state),
}))(BaseAddReviewModal);

export default AddReviewModal;
