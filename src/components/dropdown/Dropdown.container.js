import { compose, withProps } from 'recompose';

import { withUseState } from '@@hocs';
import BaseDropdown from './Dropdown';

const Dropdown = compose(
  withProps(({ options }) => ({ maxHeight: 60 + options.length * 45 })),
  withUseState('opened', false),
  withUseState('value', '')
)(BaseDropdown);

export default Dropdown;
