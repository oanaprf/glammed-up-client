import { withStateHandlers } from 'recompose';

import BaseNumberSpinner from './NumberSpinner';

const NumberSpinner = withStateHandlers(
  ({ initialValue = 0 }) => ({
    value: initialValue,
  }),
  {
    onChangeText: () => value => ({
      value,
    }),
    onIncrement: ({ value, step = 1, max = 999 }) => () => ({
      value: +value + step <= max ? +value + step : value,
    }),
    onDecrement: ({ value, step = 1 }) => () => ({
      value: +value - step >= 0 ? +value - step : value,
    }),
  }
)(BaseNumberSpinner);

export default NumberSpinner;
