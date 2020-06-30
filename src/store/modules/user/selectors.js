import { createSelector } from 'reselect';
import isEmpty from 'lodash/fp/isEmpty';
import getOr from 'lodash/fp/getOr';
import { Image } from 'react-native';

import { auth, fetch } from '@@store/middlewares';
import { U } from '@@utils';

const defaultProfilePicture = require('@@assets/images/avatar.png');

export const getFirstName = getOr('', 'firstName');
export const getLastName = getOr('', 'lastName');
export const getFullName = getOr('', 'fullName');
export const getPhoneNumber = getOr('', 'phoneNumber');
export const getAddress = getOr('', 'address');
export const getEmail = getOr('', 'email');
export const getProfilePicture = ({ profilePicture }) =>
  profilePicture
    ? `data:image/png;base64,${profilePicture}`
    : Image.resolveAssetSource(defaultProfilePicture).uri;

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

export const isUserInfoLoading = (state, { user: { _id } }) =>
  fetch.selectors.isLoading(`user/${_id || getCurrentUserId(state)}/data`)(
    state
  );

export const getProfile = (state, { userId }) =>
  fetch.selectors.getData(`user/${userId}/data`, {})(state);

export const isOwnProfile = createSelector(
  getCurrentUserId,
  U.getProp('userId'),
  (currentUserId, userId) => currentUserId === userId
);

export const getClientNames = fetch.selectors.getData('clientNames', []);
