import getOr from 'lodash/fp/getOr';

export const getLanguage = getOr('', ['preferences', 'language']);
export const getTheme = getOr('FUCHSIA', ['preferences', 'theme']);
