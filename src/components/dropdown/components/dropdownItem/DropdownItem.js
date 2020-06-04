import React from 'react';
import PropTypes from 'prop-types';

import * as S from '../../styled';

const DropdownItem = ({ option, onPress }) => (
  <S.StyledTouchableOpacity onPress={onPress} activeOpacity={0.6}>
    <S.StyledText>{option.value}</S.StyledText>
  </S.StyledTouchableOpacity>
);

DropdownItem.propTypes = {
  option: PropTypes.object.isRequired,
  onPress: PropTypes.func,
};

export default DropdownItem;
