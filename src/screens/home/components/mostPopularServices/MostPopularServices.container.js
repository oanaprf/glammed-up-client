import { compose, branch, renderComponent, nest } from 'recompose';
import { connect } from 'react-redux';

import { services } from '@@store/modules';
import { BigLoaderIcon } from '@@components';

import BaseMostPopularServices from './MostPopularServices';
import * as S from './styled';

const MostPopularServices = compose(
  connect(state => ({
    services: services.selectors.getMostPopularServices(state),
    isLoading: services.selectors.isHomeLoading(state),
  })),
  branch(
    ({ isLoading }) => isLoading,
    renderComponent(nest(S.LoaderContainer, BigLoaderIcon))
  )
)(BaseMostPopularServices);

export default MostPopularServices;
