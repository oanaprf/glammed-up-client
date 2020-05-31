import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import { theme } from '@@config';

const SettingsButton = ({ onSettingsPress }) => (
  <TouchableOpacity
    onPress={onSettingsPress}
    activeOpacity={0.6}
    hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
  >
    <Icon
      {...{
        name: 'settings',
        type: 'feather',
        size: 24,
        color: theme.colors.lightGrey,
      }}
    />
  </TouchableOpacity>
);

SettingsButton.propTypes = {
  onSettingsPress: PropTypes.func.isRequired,
};

export default SettingsButton;
