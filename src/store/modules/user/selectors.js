import { createSelector } from 'reselect';
import isEmpty from 'lodash/fp/isEmpty';

import { auth } from '@@store/middlewares';

export const isLoggedIn = createSelector(
  auth.selectors.getUserData,
  user => !isEmpty(user)
);
