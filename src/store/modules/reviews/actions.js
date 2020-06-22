import { fetch } from '@@store/middlewares';
import { routes } from '@@utils';

export const fetchUserReviews = id =>
  fetch.actions.fetch({
    name: `user/${id}/reviews`,
    url: routes.userReviews(id),
  });
