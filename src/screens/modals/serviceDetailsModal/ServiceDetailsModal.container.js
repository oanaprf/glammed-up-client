import { connect } from 'react-redux';

import { modal, services } from '@@store/modules';
import BaseServiceDetailsModal from './ServiceDetailsModal';

const ServiceDetailsModal = connect(state => ({
  service: modal.selectors.getModalData(state),
  isOwnService: services.selectors.isOwnService(state),
}))(BaseServiceDetailsModal);

export default ServiceDetailsModal;
