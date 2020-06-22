import { fetch } from '@@store/middlewares';
import getOr from 'lodash/fp/getOr';

export const getComment = getOr('', 'comment');
export const getRating = getOr('', 'rating');
export const getServiceName = getOr('', 'service.name');
export const getProviderFullName = getOr('', 'provider.fullName');

export const getUserReviews = (state, { userId }) =>
  fetch.selectors.getData(`user/${userId}/reviews`, [])(state);

export const areUserReviewsLoading = fetch.selectors.isLoading('userReviews');
