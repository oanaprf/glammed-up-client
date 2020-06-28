import { compose } from 'recompose';

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
  withUseState('submitting', false)
)(BaseAddServiceModal);

export default AddServiceModal;
