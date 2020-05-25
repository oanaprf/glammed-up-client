import getOr from 'lodash/fp/getOr';

export const getProp = propName => (_, props) =>
  getOr(undefined, propName)(props);
