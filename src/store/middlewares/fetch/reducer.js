import { handleActions } from 'redux-actions';
import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from './actionTypes';

export default handleActions(
  {
    [FETCH_START]: (state, { payload: { name } }) => ({
      ...state,
      [name]: {
        ...(state[name] || {}),
        isLoading: true,
        error: undefined,
      },
    }),
    [FETCH_SUCCESS]: (state, { payload: { name, data } }) => ({
      ...state,
      [name]: {
        ...(state[name] || {}),
        data,
        isLoading: false,
        error: undefined,
      },
    }),
    [FETCH_FAILURE]: (state, { payload: { name, error } }) => ({
      ...state,
      [name]: {
        ...(state[name] || {}),
        isLoading: false,
        error,
      },
    }),
  },
  {}
);
