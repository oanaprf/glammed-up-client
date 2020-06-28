import { fetch } from '@@store/middlewares';
import { routes } from '@@utils';

export const fetchUserReviews = id =>
  fetch.actions.fetch({
    name: `user/${id}/reviews`,
    url: routes.userReviews(id),
  });

export const addReview = params =>
  fetch.actions.fetch(
    {
      name: `user/${params.clientId}/reviews`,
      url: routes.addReview,
    },
    { method: 'POST', data: params }
  );
