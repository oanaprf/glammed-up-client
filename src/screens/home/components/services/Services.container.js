import { compose, branch, renderComponent } from 'recompose';
import { connect } from 'react-redux';

import { services } from '@@store/modules';
import { BigLoaderIcon } from '@@components';

import BaseServices from './Services';

const Services = compose(
  connect(state => ({
    services: services.selectors.getMostPopularServices(state),
    isLoading: services.selectors.isHomeLoading(state),
  })),
  branch(({ isLoading }) => isLoading, renderComponent(BigLoaderIcon))
)(BaseServices);

export default Services;
