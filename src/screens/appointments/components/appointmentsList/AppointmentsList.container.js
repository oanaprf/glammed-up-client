import { compose, branch, renderComponent, nest } from 'recompose';
import { connect } from 'react-redux';

import { BigLoaderIcon } from '@@components';
import { appointments } from '@@store/modules';

import BaseAppointmentsList from './AppointmentsList';
import * as S from './styled';

const AppointmentsList = compose(
  connect(state => ({
    isLoading: appointments.selectors.areClientAppointmentsLoading(state),
  })),
  branch(
    ({ isLoading }) => isLoading,
    renderComponent(nest(S.LoaderContainer, BigLoaderIcon))
  )
)(BaseAppointmentsList);

export default AppointmentsList;
