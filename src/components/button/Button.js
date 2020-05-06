import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';

import * as S from './styled';

const Button = ({
  interpolation,
  onPressIn,
  onPressOut,
  children,
  style,
  ...rest
}) => (
  <TouchableWithoutFeedback {...{ onPressIn, onPressOut, ...rest }}>
    <S.AnimatedButton
      {...{
        style: [style, { transform: [{ scale: interpolation }] }],
        ...rest,
      }}
    >
      {children}
    </S.AnimatedButton>
  </TouchableWithoutFeedback>
);

Button.propTypes = {
  interpolation: PropTypes.object.isRequired,
  onPressIn: PropTypes.func.isRequired,
  onPressOut: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Button;
