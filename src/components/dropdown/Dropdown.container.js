import { compose } from 'recompose';

import { withUseState } from '@@hocs';
import BaseDropdown from './Dropdown';

const Dropdown = compose(
  withUseState('opened', false),
  withUseState('value', ({ value }) => value)
)(BaseDropdown);

export default Dropdown;
