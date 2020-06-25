import { createAction } from 'redux-actions';

import { CHANGE_LANGUAGE, CHANGE_THEME } from './actionTypes';

export const changeLanguage = createAction(CHANGE_LANGUAGE, ({ language }) => ({
  language,
}));

export const changeTheme = createAction(CHANGE_THEME, ({ theme }) => ({
  theme,
}));
