import React from 'react';
import { View, Platform, UIManager, ScrollView } from 'react-native';
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
  maxHeight = 200,
  opened,
  setOpened,
  value,
  setValue,
  dark,
  rounded,
  ...rest
}) => (
  <View style={{ position: 'relative', zIndex: 99 }} {...rest}>
    <S.StyledList {...{ dark, rounded, opened, maxHeight }}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
      </ScrollView>
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
