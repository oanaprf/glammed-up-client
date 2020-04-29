import { createAction } from 'redux-actions';

import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from './actionTypes';

const fetchStart = createAction(FETCH_START, ({ source, config }) => ({ source, config }));
export const fetchSuccess = createAction(FETCH_SUCCESS, ({ name, data }) => ({ name, data }));
export const fetchFailure = createAction(FETCH_FAILURE, ({ name, error }) => ({ name, error }));

export const fetch = (source, config) => fetchStart({ source, config });
