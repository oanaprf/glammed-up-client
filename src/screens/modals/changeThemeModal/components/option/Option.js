/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';

import * as C from '@@utils/constants';
import * as S from '../../styled';

const colorMapping = {
  [C.THEME_COLORS.PURPLE]: '#D150F8',
  [C.THEME_COLORS.FUCHSIA]: '#fc00ff',
  [C.THEME_COLORS.LILA]: '#AEA9FD',
  [C.THEME_COLORS.FIRE]: '#FA2A4C',
  [C.THEME_COLORS.AQUA]: '#00C2BA',
  [C.THEME_COLORS.BLUE]: '#24B0D7',
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
