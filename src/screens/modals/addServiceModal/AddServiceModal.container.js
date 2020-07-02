import { compose, withHandlers } from 'recompose';

import { withUseState, withCloseModal } from '@@hocs';

import BaseAddServiceModal from './AddServiceModal';

const AddServiceModal = compose(
  withUseState('formValues', {
    name: '',
    category: '',
    price: '',
    duration: '',
    pictures: [],
  }),
  withUseState('submitting', false),
  withCloseModal,
  withHandlers({
    onCloseModal: ({ setFormValues, closeModal, setSubmitting }) => () => {
      setSubmitting(false);
      closeModal();
      setFormValues({
        name: '',
        category: '',
        price: '',
        duration: '',
        pictures: [],
      });
    },
  })
)(BaseAddServiceModal);

export default AddServiceModal;
