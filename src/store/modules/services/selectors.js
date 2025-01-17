import getOr from 'lodash/fp/getOr';
import { createSelector } from 'reselect';
import { Image } from 'react-native';

import { U } from '@@utils';
import { fetch } from '@@store/middlewares';

import { selectors as modalSelectors } from '../modal';
import { selectors as userSelectors } from '../user';

const defaultPicture = require('@@assets/images/image-placeholder.png');

export const getPrice = getOr('', 'price');
export const getName = getOr('', 'name');
export const getRating = getOr('', 'averageRating');
export const getProviderName = getOr('', 'provider.fullName');
export const getDuration = getOr(0, 'duration');
export const getDurationHours = service =>
  Math.floor(getDuration(service) / 60);
export const getDurationMinutes = service => +getDuration(service) % 60;

export const getFirstPicture = ({ pictures = [] }) =>
  pictures[0]
    ? `data:image/png;base64,${pictures[0]}`
    : Image.resolveAssetSource(defaultPicture).uri;
export const getPictures = service =>
  U.getLength(service.pictures)
    ? service.pictures.map(pic => ({ uri: `data:image/png;base64,${pic}` }))
    : [defaultPicture];
export const getReviews = getOr([], 'reviews');

export const isSearchLoading = fetch.selectors.isLoading('search');
export const areUserServicesLoading = (state, { user: { _id } }) =>
  fetch.selectors.isLoading(
    `user/${_id || userSelectors.getCurrentUserId(state)}/services`
  )(state);
export const areMostPopularServicesLoading = fetch.selectors.isLoading(
  'mostPopularServices'
);
export const areAllServicesLoading = fetch.selectors.isLoading('services');
export const isHomeLoading = createSelector(
  [areMostPopularServicesLoading, areAllServicesLoading],
  (servicesLoading, mostPopularServicesLoading) =>
    servicesLoading && mostPopularServicesLoading
);

export const getServices = fetch.selectors.getData('services', []);

export const getMostPopularServices = fetch.selectors.getData(
  'mostPopularServices',
  []
);

export const getSearchedServices = createSelector(
  fetch.selectors.getData('search', []),
  getOr([], 'services')
);

export const getSearchedUsers = createSelector(
  fetch.selectors.getData('search', []),
  getOr([], 'users')
);

export const getUserServices = (state, { userId }) =>
  fetch.selectors.getData(`user/${userId}/services`, [])(state);

export const isOwnService = createSelector(
  modalSelectors.getModalData,
  userSelectors.getCurrentUserId,
  ({ providerId }, currentUserId) => providerId === currentUserId
);

export const getServiceNamesByProvider = (state, { currentUserId }) =>
  fetch.selectors.getData(`user/${currentUserId}/serviceNames`, [])(state);
