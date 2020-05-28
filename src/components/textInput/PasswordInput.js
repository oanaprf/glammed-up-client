import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import { theme } from '@@config';

import TextInput from './TextInput';

const PasswordInput = ({ passwordHidden, setPasswordHidden, ...rest }) => (
  <TextInput
    Icon={
      <TouchableOpacity
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        activeOpacity={0.6}
        onPress={() => setPasswordHidden(!passwordHidden)}
      >
        <Icon
          {...{
            name: passwordHidden ? 'eye-off' : 'eye',
            type: 'feather',
            size: 20,
            color: theme.colors.grey,
          }}
        />
      </TouchableOpacity>
    }
    {...{
      secureTextEntry: passwordHidden,
      ...(Platform.OS === 'android' && { keyboardType: 'default' }),
      ...rest,
    }}
  />
);

PasswordInput.propTypes = {
  passwordHidden: PropTypes.bool.isRequired,
  setPasswordHidden: PropTypes.func.isRequired,
};

export default PasswordInput;
