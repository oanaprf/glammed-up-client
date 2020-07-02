import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { modal } from '@@store/modules';
import { withUseState, withCloseModal } from '@@hocs';
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
  withCloseModal,
  withHandlers({
    onCloseModal: ({ setFormValues, closeModal, setSubmitting }) => () => {
      setSubmitting(false);
      closeModal();
      setFormValues({ rating: 0, comment: '' });
    },
  })
)(BaseAddReviewModal);

export default AddReviewModal;
