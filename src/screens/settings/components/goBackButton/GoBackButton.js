import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

import { theme, t } from '@@config';

import * as S from './styled';

const GoBackButton = ({ onGoBackPress }) => (
  <S.StyledTouchableOpacity
    onPress={onGoBackPress}
    activeOpacity={0.6}
    hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
  >
    <Icon
      {...{
        name: 'chevron-left',
        type: 'feather',
        size: 30,
        color: theme.colors.lightGrey,
      }}
    />
    <S.StyledText>{t('home.pageName')}</S.StyledText>
  </S.StyledTouchableOpacity>
);

GoBackButton.propTypes = {
  onGoBackPress: PropTypes.func.isRequired,
};

export default GoBackButton;
