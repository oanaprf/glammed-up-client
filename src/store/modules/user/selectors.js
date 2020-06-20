import { createSelector } from 'reselect';
import isEmpty from 'lodash/fp/isEmpty';
import getOr from 'lodash/fp/getOr';

import { auth } from '@@store/middlewares';

export const isLoggedIn = createSelector(
  auth.selectors.getUserData,
  user => !isEmpty(user)
);

export const getFullName = getOr('-', 'fullName');
export const getPhoneNumber = getOr('-', 'phoneNumber');
export const getAddress = getOr('-', 'address');
