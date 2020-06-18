import getOr from 'lodash/fp/getOr';

import { fetch } from '@@store/middlewares';
import { U } from '@@utils';

const defaultPicture = require('@@assets/images/image-placeholder.png');

export const getPrice = getOr('-', 'price');
export const getName = getOr('-', 'name');
export const getRating = getOr('-', 'rating');
export const getProviderName = getOr('-', 'provider.fullName');
export const getPictures = service =>
  U.getLength(service.pictures) ? service.pictures : [defaultPicture];

export const getServices = fetch.selectors.getData('services', []);

export const getMostPopularServices = fetch.selectors.getData(
  'mostPopularServices',
  []
);
