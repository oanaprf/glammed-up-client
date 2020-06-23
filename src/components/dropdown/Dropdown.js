import React from 'react';
import {
  View,
  Platform,
  UIManager,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import compose from 'lodash/fp/compose';
import getOr from 'lodash/fp/getOr';
import find from 'lodash/fp/find';

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
  options = [],
  maxHeight = 200,
  opened,
  setOpened,
  value,
  setValue,
  dark,
  rounded,
  ...rest
}) => (
  <View style={{ position: 'relative' }} {...rest}>
    <S.StyledList
      {...{ dark, rounded, opened, maxHeight, count: options.length }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity activeOpacity={1}>
          {options.map(option => (
            <DropdownItem
              key={option.key}
              {...{
                option,
                setValue,
                setOpened,
              }}
            />
          ))}
        </TouchableOpacity>
      </ScrollView>
    </S.StyledList>
    <DropdownInput
      {...{
        opened,
        setOpened,
        value: compose(
          getOr('', 'value'),
          find(({ key }) => key === value)
        )(options),
        dark,
        rounded,
        placeholder,
      }}
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
