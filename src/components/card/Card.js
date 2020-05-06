import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Card = ({ children, ...rest }) => <S.Card {...rest}>{children}</S.Card>;

Card.propTypes = {
  children: PropTypes.any,
};

export default Card;
