import { fetch } from '@@store/middlewares';
import getOr from 'lodash/fp/getOr';

import { selectors as userSelectors } from '../user';

export const getComment = getOr('', 'comment');
export const getRating = getOr('', 'rating');
export const getServiceName = getOr('', 'service.name');
export const getProviderFullName = getOr('', 'provider.fullName');
export const getClientFullName = getOr('', 'client.fullName');

export const getUserReviews = (state, { userId }) =>
  fetch.selectors.getData(`user/${userId}/reviews`, [])(state);

export const areUserReviewsLoading = (state, { user: { _id } }) =>
  fetch.selectors.isLoading(
    `user/${_id || userSelectors.getCurrentUserId(state)}/services`
  )(state);
