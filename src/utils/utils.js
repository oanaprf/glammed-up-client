import getOr from 'lodash/fp/getOr';
import pick from 'lodash/fp/pick';

export const getProp = propName => (_, props) =>
  getOr(undefined, propName)(props);

export const getLength = getOr(0, 'length');

export const pickProviderDetails = pick([
  '_id',
  'fullName',
  'phoneNumber',
  'address',
]);
