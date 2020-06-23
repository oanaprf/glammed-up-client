import { compose } from 'recompose';
import { connect } from 'react-redux';
import getOr from 'lodash/fp/getOr';

import { withOnMount } from '@@hocs';
import { user, services, appointments } from '@@store/modules';

import BaseAddManualAppointment from './AddManualAppointment';

const today = new Date();

const AddManualAppointment = compose(
  connect(state => ({
    currentUserId: user.selectors.getCurrentUserId(state),
  })),
  connect(
    (state, { currentUserId }) => ({
      serviceNames: services.selectors.getServiceNamesByProvider(state, {
        currentUserId,
      }),
      clientNames: user.selectors.getClientNames(state),
      freeSpots: appointments.selectors.getFreeSpots(state),
    }),
    {
      fetchServiceNames: services.actions.fetchServiceNamesByProvider,
      fetchClientNames: user.actions.fetchClientNames,
      fetchFreeSpots: appointments.actions.fetchFreeSpots,
    }
  ),
  withOnMount(
    ({
      fetchServiceNames,
      fetchClientNames,
      currentUserId,
      fetchFreeSpots,
      serviceNames,
    }) => {
      fetchServiceNames(currentUserId);
      fetchClientNames();
      fetchFreeSpots(
        currentUserId,
        today.toJSON().substring(0, 10),
        getOr(60, '[0].duration', serviceNames)
      );
    }
  )
)(BaseAddManualAppointment);

export default AddManualAppointment;
