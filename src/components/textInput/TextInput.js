import React from 'react';
import { Platform } from 'react-native';
import PropTypes from 'prop-types';

import * as S from './styled';

const TextInput = ({ keyboardType, autoCapitalize, Icon, dark, ...rest }) => (
  <S.TextInputWrapper dark={dark} {...rest}>
    <S.StyledTextInput {...{ keyboardType, autoCapitalize, ...rest }} />
    {Icon && <S.StyledIcon>{Icon}</S.StyledIcon>}
  </S.TextInputWrapper>
);

TextInput.defaultProps = {
  keyboardType: Platform.OS === 'ios' ? 'ascii-capable' : 'visible-password',
  autoCapitalize: 'none',
  dark: false,
};

TextInput.propTypes = {
  keyboardType: PropTypes.string,
  autoCapitalize: PropTypes.string,
  Icon: PropTypes.element,
  dark: PropTypes.bool,
};

export default TextInput;
