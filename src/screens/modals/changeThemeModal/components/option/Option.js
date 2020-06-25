/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';

import * as S from '../../styled';

const colorMapping = {
  PURPLE: '#b900cb',
  FUCHSIA: '#fc00ff',
  FIRE: '#FA2A4C',
  ORANGE: '#ff6a00',
  AQUA: '#00C2BA',
  BLUE: '#0057FF',
};

const Option = ({ value }) => (
  <S.RowContainer>
    <S.PaddedText family="BOLD" uppercase>
      {value}
    </S.PaddedText>
    <S.ColorView color={colorMapping[value]} />
  </S.RowContainer>
);

Option.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Option;
