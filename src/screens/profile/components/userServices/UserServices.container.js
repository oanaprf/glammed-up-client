import { compose, branch, renderComponent, nest, withProps } from 'recompose';
import { connect } from 'react-redux';

import { BigLoaderIcon, NoResults } from '@@components';
import { services } from '@@store/modules';
import { t } from '@@config';

import BaseUserServices from './UserServices';
import * as S from './styled';

const UserServices = compose(
  connect((state, props) => ({
    isLoading: services.selectors.areUserServicesLoading(state, props),
  })),
  branch(
    ({ isLoading }) => isLoading,
    renderComponent(nest(S.LoaderContainer, BigLoaderIcon)),
    branch(
      // eslint-disable-next-line no-shadow
      ({ services = [] }) => !services.length,
      renderComponent(
        withProps({ message: t('profile.noServices') })(NoResults)
      )
    )
  )
)(BaseUserServices);

export default UserServices;
