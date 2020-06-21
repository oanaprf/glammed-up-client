import { compose, branch, renderComponent } from 'recompose';
import { connect } from 'react-redux';

import { BigLoaderIcon } from '@@components';
import { services } from '@@store/modules';

import BaseUserServices from './UserServices';

const UserServices = compose(
  connect(state => ({
    isLoading: services.selectors.areUserServicesLoading(state),
  })),
  branch(({ isLoading }) => isLoading, renderComponent(BigLoaderIcon))
)(BaseUserServices);

export default UserServices;
