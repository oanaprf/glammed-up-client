import { fetch } from '@@store/middlewares';
import { routes } from '@@utils';

export const fetchServices = () =>
  fetch.actions.fetch({ name: 'services', url: routes.services });

export const fetchMostPopularServices = () =>
  fetch.actions.fetch({
    name: 'mostPopularServices',
    url: routes.mostPopularServices,
  });

export const searchServices = (searchBy, category) =>
  fetch.actions.fetch({
    name: 'search',
    url: routes.search(searchBy, category),
  });

export const fetchUserServices = id =>
  fetch.actions.fetch({
    name: `user/${id}/services`,
    url: routes.userServices(id),
  });

export const fetchServiceNamesByProvider = id =>
  fetch.actions.fetch({
    name: `user/${id}/serviceNames`,
    url: routes.userServiceNames(id),
  });
