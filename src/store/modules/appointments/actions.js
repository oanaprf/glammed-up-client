import { fetch } from '@@store/middlewares';
import { routes } from '@@utils';
import * as C from '@@utils/constants';

export const fetchClientAppointments = id =>
  fetch.actions.fetch({
    name: 'clientAppointments',
    url: routes.clientAppointments(id),
  });

export const fetchProviderAppointments = (id, date) =>
  fetch.actions.fetch({
    name: 'providerAppointments',
    url: routes.providerAppointments(id, date),
  });

export const fetchFreeSpots = (id, date, duration) =>
  fetch.actions.fetch({
    name: 'freeSpots',
    url: routes.freeSpots(id, date, duration),
  });

export const bookAppointment = params =>
  fetch.actions.fetch(
    {
      name: 'clientAppointments',
      url: routes.bookAppointment,
    },
    { method: 'POST', data: params }
  );

export const approveAppointment = id =>
  fetch.actions.fetch(
    {
      name: 'approvedAppointment',
      url: routes.updateAppointment(id),
    },
    { method: 'PUT', data: { id, status: C.APPOINTMENT_STATUS.APPROVED } }
  );

export const rejectAppointment = id =>
  fetch.actions.fetch(
    {
      name: 'rejectedAppointment',
      url: routes.updateAppointment(id),
    },
    { method: 'PUT', data: { id, status: C.APPOINTMENT_STATUS.REJECTED } }
  );

export const cancelAppointment = id =>
  fetch.actions.fetch(
    {
      name: 'cancelledAppoinement',
      url: routes.updateAppointment(id),
    },
    { method: 'PUT', data: { id, status: C.APPOINTMENT_STATUS.CANCELLED } }
  );
