import React from 'react';
import { Animated } from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import { theme } from '@@config';

const LoaderIcon = ({ interpolation }) => (
  <Animated.View style={{ transform: [{ rotate: interpolation }] }}>
    <Icon
      {...{
        name: 'spinner',
        type: 'font-awesome-5',
        size: 15,
        color: theme.colors.white,
      }}
    />
  </Animated.View>
);

LoaderIcon.propTypes = {
  interpolation: PropTypes.object.isRequired,
};

export default LoaderIcon;
