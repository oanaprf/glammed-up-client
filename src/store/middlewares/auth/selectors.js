import getOr from 'lodash/fp/getOr';

export const getUserData = getOr({}, ['auth', 'user', 'data']);
export const isLoading = getOr(false, ['auth', 'user', 'isLoading']);
export const getError = getOr(undefined, ['auth', 'user', 'error']);
