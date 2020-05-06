import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

import { theme } from '@@config';

import * as S from '../styled';

const icons = {
  Home: 'home',
  Appointments: 'calendar',
  Profile: 'user',
  Settings: 'settings',
};

const TabItem = ({
  route,
  isActive,
  onPress,
  hitSlop,
  scaleInterpolate,
  onPressIn,
  onPressOut,
}) => (
  <S.StyledTouchableOpacity
    {...{
      onPress,
      onPressIn,
      onPressOut,
      hitSlop,
      style: { transform: [{ scale: scaleInterpolate }] },
    }}
  >
    <Icon
      {...{
        name: icons[route.name],
        type: 'feather',
        size: 25,
        color: isActive ? theme.colors.theme_blue.primary : theme.colors.black,
      }}
    />
    {isActive && <S.Point isActive={isActive} />}
  </S.StyledTouchableOpacity>
);

TabItem.propTypes = {
  route: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  hitSlop: PropTypes.object.isRequired,
  scaleInterpolate: PropTypes.object.isRequired,
  onPressIn: PropTypes.func.isRequired,
  onPressOut: PropTypes.func.isRequired,
};

export default TabItem;
