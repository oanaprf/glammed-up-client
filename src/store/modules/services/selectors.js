import getOr from 'lodash/fp/getOr';

import { fetch } from '@@store/middlewares';

export const getPrice = getOr('-', 'price');
export const getName = getOr('-', 'name');
export const getRating = getOr('-', 'rating');
export const getProviderName = getOr('-', 'provider.fullName');

export const getServices = fetch.selectors.getData('services', []);

export const getMostPopularServices = fetch.selectors.getData(
  'mostPopularServices',
  []
);
