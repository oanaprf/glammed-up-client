import { compose, withHandlers } from 'recompose';
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
  withUseState('submitting', false),
  withHandlers({
    onCloseModal: ({ setFormValues }) => () =>
      setFormValues({ rating: 0, comment: 'bla' }),
  })
)(BaseAddReviewModal);

export default AddReviewModal;
