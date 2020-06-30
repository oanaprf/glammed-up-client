import { compose, branch, renderComponent, nest } from 'recompose';
import { connect } from 'react-redux';

import { services } from '@@store/modules';
import { BigLoaderIcon } from '@@components';

import BaseServices from './Services';
import * as S from './styled';

const Services = compose(
  connect(state => ({
    services: services.selectors.getMostPopularServices(state),
    isLoading: services.selectors.isHomeLoading(state),
  })),
  branch(
    ({ isLoading }) => isLoading,
    renderComponent(nest(S.LoaderContainer, BigLoaderIcon))
  )
)(BaseServices);

export default Services;
