import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Text = ({
  children,
  family = 'MEDIUM',
  size = 'S',
  uppercase,
  ...rest
}) => (
  <S.StyledText {...{ family, size, uppercase, ...rest }}>
    {children}
  </S.StyledText>
);

Text.propTypes = {
  children: PropTypes.string.isRequired,
  family: PropTypes.string,
  size: PropTypes.string,
  uppercase: PropTypes.bool,
};

export default Text;
