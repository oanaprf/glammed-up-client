import { fetch } from '@@store/middlewares';
import { routes } from '@@utils';

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
