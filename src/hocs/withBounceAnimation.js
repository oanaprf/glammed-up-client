import { compose, withState, withProps, withHandlers } from 'recompose';
import { Animated, Easing } from 'react-native';

export default ({ outputRange, duration }) =>
  compose(
    withState(
      'animatedValue',
      'setAnimationValue',
      () => new Animated.Value(0)
    ),
    withProps(({ animatedValue }) => ({
      interpolation: animatedValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange,
      }),
    })),
    withHandlers({
      onPressIn: ({ animatedValue, onPressIn, disabled }) => ev => {
        if (!disabled) {
          onPressIn && onPressIn(ev);
          animatedValue.setValue(0);
          Animated.timing(animatedValue, {
            toValue: 1,
            duration,
            easing: Easing.linear,
            useNativeDriver: true,
          }).start();
        }
      },
      onPressOut: ({ animatedValue, onPressOut, disabled }) => ev => {
        if (!disabled) {
          onPressOut && onPressOut(ev);
          Animated.timing(animatedValue, {
            toValue: 0,
            duration,
            easing: Easing.linear,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  );
