import firebase from 'firebase';

import { http, routes } from '@@utils';

import { LOGIN_START, SIGN_UP_START, LOGOUT_START } from './actionTypes';
import {
  loginSuccess,
  loginFail,
  signUpSuccess,
  signUpFail,
  logoutSuccess,
  logoutFail,
} from './actions';

export default ({ dispatch }) => next => action => {
  const { type, payload } = action;
  if (type === LOGIN_START) {
    const { email, password } = payload;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        firebase
          .auth()
          .currentUser.getIdToken()
          .then(idToken => {
            http({
              url: routes.login,
              method: 'GET',
              headers: {
                Authorization: idToken,
              },
            }).then(({ data }) => {
              dispatch(loginSuccess({ data }));
            });
          })
          .catch(error => dispatch(loginFail({ error })));
      })
      .catch(error => dispatch(loginFail({ error })));
  } else if (type === SIGN_UP_START) {
    http({
      url: routes.user,
      method: 'POST',
      data: payload,
    })
      .then(({ data: { data } }) => dispatch(signUpSuccess({ data })))
      .catch(error => dispatch(signUpFail({ error })));
  } else if (type === LOGOUT_START) {
    firebase
      .auth()
      .signOut()
      .then(() => dispatch(logoutSuccess()))
      .catch(error => dispatch(logoutFail({ error })));
  }
  return next(action);
};
