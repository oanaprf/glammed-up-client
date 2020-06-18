import { fetch } from '@@store/middlewares';
import { routes } from '@@utils';

export const fetchServices = () =>
  fetch.actions.fetch({ name: 'services', url: routes.services });

export const fetchMostPopularServices = () =>
  fetch.actions.fetch({
    name: 'mostPopularServices',
    url: routes.mostPopularServices,
  });
