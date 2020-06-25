import React from 'react';
import PropTypes from 'prop-types';

import { t } from '@@config';

import * as S from './styled';

const Option = ({ icon, label, onPress }) => (
  <S.Option activeOpacity={0.6} onPress={onPress}>
    <S.StyledIcon
      {...{
        name: icon,
        type: 'feather',
        size: 25,
      }}
    />
    <S.StyledText>{t(`settings.${label}`)}</S.StyledText>
  </S.Option>
);

Option.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

export default Option;
