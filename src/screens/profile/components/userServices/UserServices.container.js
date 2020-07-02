import { compose, branch, renderComponent, nest } from 'recompose';
import { connect } from 'react-redux';

import { BigLoaderIcon } from '@@components';
import { services } from '@@store/modules';

import BaseUserServices from './UserServices';
import * as S from './styled';

const UserServices = compose(
  connect((state, props) => ({
    isLoading: services.selectors.areUserServicesLoading(state, props),
  })),
  branch(
    ({ isLoading }) => isLoading,
    renderComponent(nest(S.LoaderContainer, BigLoaderIcon))
  )
)(BaseUserServices);

export default UserServices;
