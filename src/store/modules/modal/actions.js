import { createAction } from 'redux-actions';

import { MODAL_OPEN, MODAL_CLOSE } from './actionTypes';

export const openModal = createAction(MODAL_OPEN, ({ name }) => ({
  name,
}));
export const closeModal = createAction(MODAL_CLOSE);
