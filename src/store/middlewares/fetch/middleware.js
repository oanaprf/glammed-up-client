import { http } from '@@utils';
import { FETCH_START } from './actionTypes';
import { fetchSuccess, fetchFailure } from './actions';

export default ({ dispatch }) => next => action => {
  const { type, payload } = action;
  if (type === FETCH_START) {
    const {
      source: { name, url },
      config,
    } = payload;

    http({ url, ...config })
      .then(({ data }) => dispatch(fetchSuccess({ name, data })))
      .catch(error => dispatch(fetchFailure({ name, error })));
  }
  next(action);
};
