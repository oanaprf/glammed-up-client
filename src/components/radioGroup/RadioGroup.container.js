import { withUseState } from '@@hocs';

import BaseRadioGroup from './RadioGroup';

const RadioGroup = withUseState(
  'selectedOption',
  ({ selectedOption }) => selectedOption || 0
)(BaseRadioGroup);

export default RadioGroup;
