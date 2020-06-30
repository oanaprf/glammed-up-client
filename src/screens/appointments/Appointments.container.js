import { compose } from 'recompose';
import { connect } from 'react-redux';

import { withUseFocusEffect } from '@@hocs';
import { user, appointments } from '@@store/modules';

import BaseAppointments from './Appointments';

const Appointments = compose(
  connect(
    state => ({
      currentUserId: user.selectors.getCurrentUserId(state),
      isCurrentUserProvider: user.selectors.isCurrentUserProvider(state),
      clientAppointments: appointments.selectors.getClientAppointments(state),
      providerAppointments: appointments.selectors.getProviderAppointments(
        state
      ),
    }),
    {
      fetchClientAppointments: appointments.actions.fetchClientAppointments,
      fetchProviderAppointments: appointments.actions.fetchProviderAppointments,
    }
  ),
  withUseFocusEffect(
    ({
      currentUserId,
      isCurrentUserProvider,
      fetchClientAppointments,
      fetchProviderAppointments,
    }) => {
      fetchClientAppointments(currentUserId);
      isCurrentUserProvider &&
        fetchProviderAppointments(
          currentUserId,
          new Date().toLocaleDateString('en-US')
        );
    }
  )
)(BaseAppointments);

export default Appointments;
