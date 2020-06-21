import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { appointments, user } from '@@store/modules';

import BaseAppointmentsCalendar from './AppointmentsCalendar';

const AppointmentsCalendar = compose(
  connect(
    state => ({
      currentUserId: user.selectors.getCurrentUserId(state),
    }),
    {
      fetchProviderAppointments: appointments.actions.fetchProviderAppointments,
    }
  ),
  withHandlers({
    onChangeDate: ({ fetchProviderAppointments, currentUserId }) => ({
      dateString,
    }) => fetchProviderAppointments(currentUserId, dateString),
  })
)(BaseAppointmentsCalendar);

export default AppointmentsCalendar;
