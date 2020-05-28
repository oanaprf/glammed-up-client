import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

import * as S from './styled';

const SocialLoginButton = ({ onPress, type }) => (
  <S.PaddedTouchableOpacity onPress={onPress} activeOpacity={0.6}>
    <Icon {...{ name: `social-${type}`, type: 'simple-line-icon', size: 30 }} />
  </S.PaddedTouchableOpacity>
);

SocialLoginButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default SocialLoginButton;
