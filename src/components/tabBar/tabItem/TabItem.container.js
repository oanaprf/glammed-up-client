import { compose, withProps, withHandlers, withState } from 'recompose';
import { Easing, Animated } from 'react-native';

import BaseTabItem from './TabItem';

const TabItem = compose(
  withState('scaleValue', 'setScaleValue', () => new Animated.Value(0)),
  withProps(({ scaleValue }) => ({
    scaleInterpolate: scaleValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 1.1, 1.4],
    }),
    hitSlop: { top: 20, bottom: 20, left: 20, right: 20 },
  })),
  withHandlers({
    onPress: ({ emit, navigate, route, isActive }) => () => {
      emit({
        type: 'tabPress',
        target: route.key,
      });
      !isActive && navigate(route.name);
    },
    onPressIn: ({ scaleValue, onPressIn }) => ev => {
      onPressIn && onPressIn(ev);
      scaleValue.setValue(0);
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    },
    onPressOut: ({ scaleValue, onPressOut }) => ev => {
      onPressOut && onPressOut(ev);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 100,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    },
  })
)(BaseTabItem);

export default TabItem;
