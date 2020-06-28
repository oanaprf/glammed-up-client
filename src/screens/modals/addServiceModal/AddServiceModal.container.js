import { compose, withHandlers } from 'recompose';

import { withUseState } from '@@hocs';

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
  withHandlers({
    onCloseModal: ({ setFormValues }) => () =>
      setFormValues({
        name: '',
        category: '',
        price: '',
        duration: '',
        pictures: [],
      }),
  })
)(BaseAddServiceModal);

export default AddServiceModal;
