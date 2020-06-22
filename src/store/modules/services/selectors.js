import getOr from 'lodash/fp/getOr';
import { createSelector } from 'reselect';

import { U } from '@@utils';
import { fetch } from '@@store/middlewares';

import { selectors as modalSelectors } from '../modal';
import { selectors as userSelectors } from '../user';

const defaultPicture = require('@@assets/images/image-placeholder.png');

export const getPrice = getOr('', 'price');
export const getName = getOr('', 'name');
export const getRating = getOr('', 'averageRating');
export const getProviderName = getOr('', 'provider.fullName');
export const getFirstPicture = getOr(defaultPicture, 'pictures.0');
export const getPictures = service =>
  U.getLength(service.pictures) ? service.pictures : [defaultPicture];

export const isSearchLoading = fetch.selectors.isLoading('search');
export const areUserServicesLoading = fetch.selectors.isLoading('userServices');

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
