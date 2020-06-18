import getOr from 'lodash/fp/getOr';
import { createSelector } from 'reselect';

import { U } from '@@utils';

export const isModalOpen = getOr(false, ['modal', 'open']);
export const getModalName = getOr('', ['modal', 'name']);
export const getModalData = getOr({}, ['modal', 'data']);

export const isSpecificModalOpen = createSelector(
  [isModalOpen, getModalName, U.getProp('name')],
  (modalOpened, modalName, name) => modalOpened && modalName === name
);
