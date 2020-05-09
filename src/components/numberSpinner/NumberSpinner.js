import React from 'react';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import { theme } from '@@config';
import * as S from './styled';

const NumberSpinner = ({
  value,
  onIncrement,
  onDecrement,
  onChangeText,
  dark,
  rounded,
  ...rest
}) => (
  <S.NumberSpinner {...{ dark, rounded, ...rest }}>
    <S.LeftPaddedTouchableOpacity
      onPress={onDecrement}
      hitSlop={{ top: 10, bottom: 10, left: 20, right: 10 }}
    >
      <Icon
        {...{
          name: 'minus',
          type: 'feather',
          size: 20,
          color: theme.colors.grey,
        }}
      ></Icon>
    </S.LeftPaddedTouchableOpacity>
    <S.StyledNumericInput
      {...{ value: `${value}`, onChangeText, maxLength: 3, dark }}
    />
    <S.RightPaddedTouchableOpacity
      onPress={onIncrement}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 20 }}
    >
      <Icon
        {...{
          name: 'plus',
          type: 'feather',
          size: 20,
          color: theme.colors.grey,
        }}
      ></Icon>
    </S.RightPaddedTouchableOpacity>
  </S.NumberSpinner>
);

NumberSpinner.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onChangeText: PropTypes.func.isRequired,
  dark: PropTypes.bool,
  rounded: PropTypes.bool,
};

export default NumberSpinner;
