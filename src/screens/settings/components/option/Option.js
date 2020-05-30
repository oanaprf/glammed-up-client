import React from 'react';
import PropTypes from 'prop-types';

import { Text } from '@@components';
import { t, theme } from '@@config';

import * as S from './styled';

const Option = ({ icon, label }) => (
  <S.Option activeOpacity={0.6}>
    <S.StyledIcon
      {...{
        name: icon,
        type: 'feather',
        size: 25,
        color: theme.colors.theme_black_pink.secondary,
      }}
    />
    <Text>{t(`settings.${label}`)}</Text>
  </S.Option>
);

Option.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Option;
