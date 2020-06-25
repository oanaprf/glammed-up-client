import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

import * as S from './styled';

const RadioGroup = ({
  options,
  selectedOption,
  setSelectedOption,
  onChange,
  style,
}) => (
  <View style={style}>
    {options.map(({ value, Component }) => (
      <S.RowContainer
        key={value}
        onPress={() => {
          onChange && onChange(value);
          setSelectedOption(value);
        }}
        activeOpacity={0.6}
      >
        <Icon
          {...{
            name:
              value === selectedOption
                ? 'radio-button-checked'
                : 'radio-button-unchecked',
            size: 20,
          }}
        />
        {Component}
      </S.RowContainer>
    ))}
  </View>
);

RadioGroup.propTypes = {
  options: PropTypes.array.isRequired,
  selectedOption: PropTypes.string.isRequired,
  setSelectedOption: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  style: PropTypes.array,
};

export default RadioGroup;
