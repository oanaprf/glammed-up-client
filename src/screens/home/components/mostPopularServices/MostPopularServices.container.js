import { compose, branch, renderComponent } from 'recompose';
import { connect } from 'react-redux';

import { services } from '@@store/modules';
import { BigLoaderIcon } from '@@components';

import BaseMostPopularServices from './MostPopularServices';

const MostPopularServices = compose(
  connect(state => ({
    services: services.selectors.getMostPopularServices(state),
    isLoading: services.selectors.isHomeLoading(state),
  })),
  branch(({ isLoading }) => isLoading, renderComponent(BigLoaderIcon))
)(BaseMostPopularServices);

export default MostPopularServices;
