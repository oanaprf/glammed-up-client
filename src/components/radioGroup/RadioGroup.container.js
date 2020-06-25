import { withUseState } from '@@hocs';

import BaseRadioGroup from './RadioGroup';

const RadioGroup = withUseState(
  'selectedOption',
  ({ selectedOption }) => selectedOption
)(BaseRadioGroup);

export default RadioGroup;
