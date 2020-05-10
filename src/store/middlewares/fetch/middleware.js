import firebase from 'firebase';

import { http } from '@@utils';
import { FETCH_START } from './actionTypes';
import { fetchSuccess, fetchFail } from './actions';

export default ({ dispatch }) => next => action => {
  const { type, payload } = action;
  if (type === FETCH_START) {
    const {
      source: { name, url },
      config,
    } = payload;

    firebase
      .auth()
      .currentUser.getIdToken()
      .then(idToken =>
        http({
          url,
          headers: {
            Authorization: idToken,
          },
          ...config,
        })
          .then(({ data }) => dispatch(fetchSuccess({ name, data })))
          .catch(error => dispatch(fetchFail({ name, error })))
      );
  }
  next(action);
};
