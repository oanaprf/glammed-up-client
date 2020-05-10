import { createAction } from 'redux-actions';

import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from './actionTypes';

const fetchStart = createAction(FETCH_START, ({ source, config }) => ({
  source,
  config,
}));
export const fetchSuccess = createAction(FETCH_SUCCESS, ({ name, data }) => ({
  name,
  data,
}));
export const fetchFail = createAction(FETCH_FAIL, ({ name, error }) => ({
  name,
  error,
}));

export const fetch = (source, config) => fetchStart({ source, config });
