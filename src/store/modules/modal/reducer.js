import { handleActions } from 'redux-actions';
import { MODAL_OPEN, MODAL_CLOSE } from './actionTypes';

export default handleActions(
  {
    [MODAL_OPEN]: (state, { payload: { name } }) => ({
      ...state,
      name,
      open: true,
    }),
    [MODAL_CLOSE]: state => ({
      ...state,
      name: undefined,
      open: false,
    }),
  },
  {}
);
