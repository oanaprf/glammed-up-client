import { handleActions } from 'redux-actions';
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
} from './actionTypes';

export default handleActions(
  {
    [LOGIN_START]: state => ({
      ...state,
      user: {
        ...(state.user || {}),
        isLoading: true,
        error: undefined,
      },
    }),
    [LOGIN_SUCCESS]: (state, { payload: { data } }) => ({
      ...state,
      user: {
        ...(state.user || {}),
        data,
        isLoading: false,
        error: undefined,
      },
    }),
    [LOGIN_FAIL]: (state, { payload: { error } }) => ({
      ...state,
      user: {
        ...(state.user || {}),
        isLoading: false,
        error,
      },
    }),
    [SIGN_UP_START]: state => ({
      ...state,
      user: {
        ...(state.user || {}),
        isLoading: true,
        error: undefined,
      },
    }),
    [SIGN_UP_SUCCESS]: (state, { payload: { data } }) => ({
      ...state,
      user: {
        ...(state.user || {}),
        data,
        isLoading: false,
        error: undefined,
      },
    }),
    [SIGN_UP_FAIL]: (state, { payload: { error } }) => ({
      ...state,
      user: {
        ...(state.user || {}),
        isLoading: false,
        error,
      },
    }),
    [LOGOUT_START]: state => ({
      ...state,
      user: {
        ...(state.user || {}),
        isLoading: true,
        error: undefined,
      },
    }),
    [LOGOUT_SUCCESS]: state => ({
      ...state,
      user: {
        ...(state.user || {}),
        data: undefined,
        isLoading: false,
        error: undefined,
      },
    }),
    [LOGOUT_FAIL]: (state, { payload: { error } }) => ({
      ...state,
      user: {
        ...(state.user || {}),
        isLoading: false,
        error,
      },
    }),
  },
  { user: {} }
);
