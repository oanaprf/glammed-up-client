import React from 'react';
import { View, Platform, UIManager } from 'react-native';
import PropTypes from 'prop-types';

import { DropdownItem, DropdownInput } from './components';
import * as S from './styled';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Dropdown = ({
  placeholder,
  options,
  maxHeight,
  opened,
  setOpened,
  value,
  setValue,
  dark,
  rounded,
  ...rest
}) => (
  <View style={{ position: 'relative' }} {...rest}>
    <S.StyledList {...{ dark, rounded, opened, maxHeight }}>
      {options.map(option => (
        <DropdownItem
          key={option}
          {...{
            option,
            setValue,
            setOpened,
          }}
        />
      ))}
    </S.StyledList>
    <DropdownInput
      {...{ opened, setOpened, value, dark, rounded, placeholder }}
    />
  </View>
);

Dropdown.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.array,
  maxHeight: PropTypes.number,
  opened: PropTypes.bool,
  setOpened: PropTypes.func,
  value: PropTypes.string,
  setValue: PropTypes.func,
  dark: PropTypes.bool,
  rounded: PropTypes.bool,
};

export default Dropdown;
