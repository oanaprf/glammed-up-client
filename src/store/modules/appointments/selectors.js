import { fetch } from '@@store/middlewares';
import getOr from 'lodash/fp/getOr';
import compose from 'lodash/fp/compose';

export const getDate = compose(
  date => new Date(date).toLocaleDateString('ro-RO'),
  getOr('', 'date')
);
export const getTime = compose(date => {
  const dateObject = new Date(date);
  const hours = dateObject.getUTCHours();
  const minutes = dateObject.getUTCMinutes();
  return `${hours}${hours === 0 ? '0' : ''}:${minutes}${
    minutes === 0 ? '0' : ''
  }`;
}, getOr('', 'date'));
export const getStatus = getOr('', 'status');
export const getClientFullName = getOr('', 'client.fullName');

export const areClientAppointmentsLoading = fetch.selectors.isLoading(
  'clientAppointments'
);

export const areProviderAppointmentsLoading = fetch.selectors.isLoading(
  'providerAppointments'
);

export const getClientAppointments = fetch.selectors.getData(
  'clientAppointments',
  []
);

export const getProviderAppointments = fetch.selectors.getData(
  'providerAppointments',
  []
);

export const getFreeSpots = fetch.selectors.getData('freeSpots', []);
