import getOr from 'lodash/fp/getOr';
import pick from 'lodash/fp/pick';
import every from 'lodash/fp/every';
import compose from 'lodash/fp/compose';
import values from 'lodash/fp/values';

export const getProp = propName => (_, props) =>
  getOr(undefined, propName)(props);

export const getLength = getOr(0, 'length');

export const pickProviderDetails = pick([
  '_id',
  'fullName',
  'phoneNumber',
  'address',
]);

export const isFormValid = compose(every(Boolean), values);
