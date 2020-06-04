import React from 'react';
import PropTypes from 'prop-types';

import { theme } from '@@config';

import Text from './Text';

const ButtonText = ({
  children,
  size = 'S',
  family = 'BOLD',
  uppercase = true,
  style,
  ...rest
}) => (
  <Text
    {...{
      size,
      family,
      uppercase,
      style: [{ color: theme.colors.white }, style],
      ...rest,
    }}
  >
    {children}
  </Text>
);

ButtonText.propTypes = {
  children: PropTypes.any.isRequired,
  size: PropTypes.string,
  family: PropTypes.string,
  uppercase: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default ButtonText;
