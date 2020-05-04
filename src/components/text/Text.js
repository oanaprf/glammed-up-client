import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Text = ({ children, ...rest }) => (
  <S.StyledText {...rest}>{children}</S.StyledText>
);

Text.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Text;
