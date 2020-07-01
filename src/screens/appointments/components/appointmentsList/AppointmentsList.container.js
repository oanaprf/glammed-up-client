import { compose, branch, renderComponent, nest, withProps } from 'recompose';
import { connect } from 'react-redux';

import { BigLoaderIcon, NoResults } from '@@components';
import { appointments } from '@@store/modules';
import { t } from '@@config';

import BaseAppointmentsList from './AppointmentsList';
import * as S from './styled';

const AppointmentsList = compose(
  connect(state => ({
    isLoading: appointments.selectors.areClientAppointmentsLoading(state),
  })),
  branch(
    ({ isLoading }) => isLoading,
    renderComponent(nest(S.LoaderContainer, BigLoaderIcon)),
    branch(
      // eslint-disable-next-line no-shadow
      ({ appointments = [] }) => !appointments.length,
      renderComponent(
        withProps({ message: t('appointments.noAppointments') })(NoResults)
      )
    )
  )
)(BaseAppointmentsList);

export default AppointmentsList;
