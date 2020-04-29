import getOr from 'lodash/fp/getOr';

export const getData = (key, defaultValue = {}) => getOr(defaultValue, ['api', key, 'data']);
export const isLoading = key => getOr(false, ['api', key, 'isLoading']);
export const getError = key => getOr(undefined, ['api', key, 'error']);
