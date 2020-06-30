import { compose, branch, renderComponent, nest } from 'recompose';
import { connect } from 'react-redux';

import { BigLoaderIcon } from '@@components';
import { appointments } from '@@store/modules';

import BaseAppointments from './Appointments';
import * as S from './styled';

const Appointments = compose(
  connect(state => ({
    isLoading: appointments.selectors.areProviderAppointmentsLoading(state),
  })),
  branch(
    ({ isLoading }) => isLoading,
    renderComponent(nest(S.LoaderContainer, BigLoaderIcon))
  )
)(BaseAppointments);

export default Appointments;
