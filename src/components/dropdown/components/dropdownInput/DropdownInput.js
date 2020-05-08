import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import { theme } from '@@config';
import { TextInput } from '../../../textInput';

const DropdownInput = ({ onPress, ...rest }) => (
  <TextInput
    {...{ editable: false, ...rest }}
    Icon={
      <TouchableOpacity
        onPress={onPress}
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
      >
        <Icon
          {...{
            name: 'chevron-down',
            type: 'feather',
            size: 20,
            color: theme.colors.grey,
          }}
        />
      </TouchableOpacity>
    }
  />
);

DropdownInput.propTypes = {
  onPress: PropTypes.func,
};

export default DropdownInput;
