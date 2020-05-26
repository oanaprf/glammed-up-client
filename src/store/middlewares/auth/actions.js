import { createAction } from 'redux-actions';

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

export const loginStart = createAction(LOGIN_START, ({ email, password }) => ({
  email,
  password,
}));
export const loginSuccess = createAction(LOGIN_SUCCESS, ({ data }) => ({
  data,
}));
export const loginFail = createAction(LOGIN_FAIL, ({ error }) => ({
  error,
}));

export const signUpStart = createAction(
  SIGN_UP_START,
  ({ firstName, lastName, email, password }) => ({
    firstName,
    lastName,
    email,
    password,
  })
);
export const signUpSuccess = createAction(SIGN_UP_SUCCESS, ({ data }) => ({
  data,
}));
export const signUpFail = createAction(SIGN_UP_FAIL, ({ error }) => ({
  error,
}));

export const logoutStart = createAction(LOGOUT_START);
export const logoutSuccess = createAction(LOGOUT_SUCCESS);
export const logoutFail = createAction(LOGOUT_FAIL, ({ error }) => ({
  error,
}));
