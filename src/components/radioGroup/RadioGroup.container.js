import { withUseState } from '@@hocs';

import BaseRadioGroup from './RadioGroup';

const RadioGroup = withUseState('selectedOption', 0)(BaseRadioGroup);

export default RadioGroup;
