import { compose } from 'recompose';

import { withUseState } from '@@hocs';
import BaseDropdown from './Dropdown';

const Dropdown = compose(
  withUseState('opened', false),
  withUseState('value', '')
)(BaseDropdown);

export default Dropdown;
