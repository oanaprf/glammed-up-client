import { compose, withProps, withState, withHandlers } from 'recompose';
import { Animated, Easing } from 'react-native';

import BaseButton from './Button';

const Button = compose(
  withState('scaleValue', 'setScaleValue', () => new Animated.Value(0)),
  withProps(({ scaleValue }) => ({
    scaleInterpolate: scaleValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 0.98, 0.95],
    }),
  })),
  withHandlers({
    onPressIn: ({ scaleValue, onPressIn }) => ev => {
      onPressIn && onPressIn(ev);
      scaleValue.setValue(0);
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 70,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    },
    onPressOut: ({ scaleValue, onPressOut }) => ev => {
      onPressOut && onPressOut(ev);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 70,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    },
  })
)(BaseButton);

export default Button;
