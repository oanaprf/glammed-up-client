import { createSelector } from 'reselect';
import isEmpty from 'lodash/fp/isEmpty';
import getOr from 'lodash/fp/getOr';

import { auth, fetch } from '@@store/middlewares';

const defaultProfilePicture = require('@@assets/images/avatar.png');

export const getFullName = getOr('', 'fullName');
export const getPhoneNumber = getOr('', 'phoneNumber');
export const getAddress = getOr('', 'address');
export const getProfilePicture = getOr(defaultProfilePicture, 'profilePicture');

export const isLoggedIn = createSelector(
  auth.selectors.getUserData,
  user => !isEmpty(user)
);

export const isCurrentUserProvider = createSelector(
  auth.selectors.getUserData,
  ({ isProvider }) => isProvider
);

export const getCurrentUserId = createSelector(
  auth.selectors.getUserData,
  ({ _id }) => _id
);

export const getProfile = (state, { userId }) =>
  fetch.selectors.getData(`user/${userId}/data`, {})(state);
