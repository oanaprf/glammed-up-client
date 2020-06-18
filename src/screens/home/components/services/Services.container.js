import { connect } from 'react-redux';

import { services } from '@@store/modules';

import BaseServices from './Services';

const Services = connect(state => ({
  services: services.selectors.getServices(state),
}))(BaseServices);

export default Services;
