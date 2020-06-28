import { compose } from 'recompose';
import { connect } from 'react-redux';

import { modal } from '@@store/modules';
import { withUseState } from '@@hocs';
import BaseAddReviewModal from './AddReviewModal';

const AddReviewModal = compose(
  connect(state => ({
    service: modal.selectors.getModalData(state),
  })),
  withUseState('formValues', {
    rating: 0,
    comment: '',
  }),
  withUseState('submitting', false)
)(BaseAddReviewModal);

export default AddReviewModal;
