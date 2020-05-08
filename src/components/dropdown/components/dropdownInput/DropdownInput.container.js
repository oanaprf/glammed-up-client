import { withHandlers } from 'recompose';
import { LayoutAnimation } from 'react-native';

import BaseDropdownInput from './DropdownInput';

const DropdownInput = withHandlers({
  onPress: ({ opened, setOpened }) => () => {
    setOpened(!opened);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  },
})(BaseDropdownInput);

export default DropdownInput;
