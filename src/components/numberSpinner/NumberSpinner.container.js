import { withStateHandlers } from 'recompose';

import BaseNumberSpinner from './NumberSpinner';

const NumberSpinner = withStateHandlers(
  ({ initialValue = 0 }) => ({
    value: initialValue,
  }),
  {
    onChangeText: (_, { onChangeText }) => value => {
      onChangeText && onChangeText(value);
      return {
        value,
      };
    },
    onIncrement: ({ value }, { step = 1, max = 999, onChangeText }) => () => {
      const newValue = +value + step <= max ? +value + step : value;
      onChangeText && onChangeText(newValue);
      return {
        value: newValue,
      };
    },
    onDecrement: ({ value }, { step = 1, onChangeText }) => () => {
      const newValue = +value - step >= 0 ? +value - step : value;
      onChangeText && onChangeText(newValue);
      return { value: newValue };
    },
  }
)(BaseNumberSpinner);

export default NumberSpinner;
