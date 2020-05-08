import React from 'react';
import PropTypes from 'prop-types';

import * as S from '../../styled';

const DropdownItem = ({ option, onPress }) => (
  <S.StyledTouchableOpacity onPress={onPress}>
    <S.StyledText>{option}</S.StyledText>
  </S.StyledTouchableOpacity>
);

DropdownItem.propTypes = {
  option: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

export default DropdownItem;
