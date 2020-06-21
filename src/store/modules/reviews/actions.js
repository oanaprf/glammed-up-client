import { fetch } from '@@store/middlewares';
import { routes } from '@@utils';

export const fetchUserReviews = id =>
  fetch.actions.fetch({
    name: 'userReviews',
    url: routes.userReviews(id),
  });
