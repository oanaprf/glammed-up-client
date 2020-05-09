import React from 'react';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { theme } from '@@config';

const Star = ({
  index,
  rating,
  onPress,
  interpolation,
  onPressIn,
  onPressOut,
}) => (
  <TouchableOpacity
    {...{
      activeOpacity: 1,
      onPress,
      onPressIn,
      onPressOut,
      style: { padding: 5, transform: [{ scale: interpolation }] },
      hitSlop: { top: 5, bottom: 5, right: 5, left: 5 },
    }}
  >
    <Icon
      {...{
        name: rating >= index ? 'star' : 'staro',
        type: 'antdesign',
        size: 30,
        color: theme.colors.warning,
      }}
    ></Icon>
  </TouchableOpacity>
);

Star.propTypes = {
  index: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  interpolation: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
  onPressIn: PropTypes.func.isRequired,
  onPressOut: PropTypes.func.isRequired,
};

export default Star;
