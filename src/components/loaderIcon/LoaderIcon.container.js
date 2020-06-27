import { compose, withState, withProps } from 'recompose';
import { Animated, Easing } from 'react-native';
import { withOnMount } from '@@hocs';

import BaseLoaderIcon from './LoaderIcon';

const LoaderIcon = compose(
  withState('animatedValue', 'setAnimationValue', () => new Animated.Value(0)),
  withProps(({ animatedValue }) => ({
    interpolation: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    }),
  })),
  withOnMount(({ animatedValue }) => {
    animatedValue.setValue(0);
    Animated.timing(animatedValue, {
      toValue: 2,
      duration: 1500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  })
)(BaseLoaderIcon);

export default LoaderIcon;
