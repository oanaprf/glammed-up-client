import { compose, branch, renderComponent } from 'recompose';
import { connect } from 'react-redux';

import { services } from '@@store/modules';
import { BigLoaderIcon } from '@@components';

import BaseServices from './Services';

const Services = compose(
  connect(state => ({
    services: services.selectors.getServices(state),
    isLoading: services.selectors.areAllServicesLoading(state),
  })),
  branch(({ isLoading }) => isLoading, renderComponent(BigLoaderIcon))
)(BaseServices);

export default Services;
