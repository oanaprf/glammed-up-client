import { withProps } from 'recompose';

import TextInput from './TextInput';

const NumericInput = withProps({
  keyboardType: 'numeric',
})(TextInput);

export default NumericInput;
