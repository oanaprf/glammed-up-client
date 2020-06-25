import { handleActions } from 'redux-actions';
import { CHANGE_LANGUAGE, CHANGE_THEME } from './actionTypes';

export default handleActions(
  {
    [CHANGE_LANGUAGE]: (state, { payload: { language } }) => ({
      ...state,
      language,
    }),
    [CHANGE_THEME]: (state, { payload: { theme } }) => ({
      ...state,
      theme,
    }),
  },
  {}
);
