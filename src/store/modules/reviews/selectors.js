import { fetch } from '@@store/middlewares';
import getOr from 'lodash/fp/getOr';

export const getComment = getOr('', 'comment');
export const getRating = getOr('', 'rating');
export const getServiceName = getOr('', 'service.name');
export const getProviderFullName = getOr('', 'provider.fullname');

export const getUserReviews = fetch.selectors.getData('userReviews', []);
export const areUserReviewsLoading = fetch.selectors.isLoading('userReviews');
