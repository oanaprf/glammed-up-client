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
    {options.map((option, index) => (
      <S.RowContainer
        key={index}
        onPress={() => {
          onChange && onChange();
          setSelectedOption(index);
        }}
        activeOpacity={0.6}
      >
        <Icon
          {...{
            name:
              index === selectedOption
                ? 'radio-button-checked'
                : 'radio-button-unchecked',
            size: 20,
          }}
        />
        {option}
      </S.RowContainer>
    ))}
  </View>
);

RadioGroup.propTypes = {
  options: PropTypes.array.isRequired,
  selectedOption: PropTypes.number.isRequired,
  setSelectedOption: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  style: PropTypes.array,
};

export default RadioGroup;
