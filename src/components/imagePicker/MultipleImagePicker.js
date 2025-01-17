import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import { theme } from '@@config';
import Button from '../button';
import * as S from './styled';
import { NoImageSelected } from './components';

const MultipleImagePicker = ({ images, onSelectImage }) => (
  <S.RowContainer>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        flex: 1,
        paddingLeft: 10,
      }}
    >
      {images.length ? (
        <TouchableOpacity activeOpacity={1} style={{ flexDirection: 'row' }}>
          {images.map((image, index) => (
            <S.StyledSmallImage key={index} source={{ uri: image }} />
          ))}
        </TouchableOpacity>
      ) : (
        <NoImageSelected />
      )}
    </ScrollView>
    <Button onPress={onSelectImage}>
      <Icon
        {...{
          name: 'plus',
          type: 'feather',
          size: 20,
          color: theme.colors.white,
        }}
      />
    </Button>
  </S.RowContainer>
);

MultipleImagePicker.propTypes = {
  images: PropTypes.array.isRequired,
  onSelectImage: PropTypes.func.isRequired,
};

export default MultipleImagePicker;
