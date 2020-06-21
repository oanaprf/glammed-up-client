import { compose, branch, renderComponent } from 'recompose';
import { connect } from 'react-redux';

import { BigLoaderIcon } from '@@components';
import { appointments } from '@@store/modules';

import BaseAppointmentsList from './AppointmentsList';

const AppointmentsList = compose(
  connect(state => ({
    isLoading: appointments.selectors.areClientAppointmentsLoading(state),
  })),
  branch(({ isLoading }) => isLoading, renderComponent(BigLoaderIcon))
)(BaseAppointmentsList);

export default AppointmentsList;
