import { connect } from 'react-redux';

import { services } from '@@store/modules';

import BaseMostPopularServices from './MostPopularServices';

const MostPopularServices = connect(state => ({
  services: services.selectors.getMostPopularServices(state),
}))(BaseMostPopularServices);

export default MostPopularServices;
