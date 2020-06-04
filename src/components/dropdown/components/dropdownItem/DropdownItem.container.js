import { withHandlers } from 'recompose';
import { LayoutAnimation } from 'react-native';

import BaseDropdownItem from './DropdownItem';

const DropdownItem = withHandlers({
  onPress: ({ option, setValue, setOpened }) => () => {
    setValue(option.key);
    setOpened(false);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  },
})(BaseDropdownItem);

export default DropdownItem;
