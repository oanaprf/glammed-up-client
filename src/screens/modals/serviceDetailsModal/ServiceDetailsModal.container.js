import { connect } from 'react-redux';

import { modal } from '@@store/modules';
import BaseServiceDetailsModal from './ServiceDetailsModal';

const ServiceDetailsModal = connect(state => ({
  service: modal.selectors.getModalData(state),
}))(BaseServiceDetailsModal);

export default ServiceDetailsModal;
