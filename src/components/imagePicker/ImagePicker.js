import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, TouchableOpacity } from 'react-native';
import * as ExpoImagePicker from 'expo-image-picker';
import { Icon } from 'react-native-elements';

import { theme } from '@@config';
import Button from '../button';
import * as S from './styled';
import { NoImageSelected } from './components';

const defaultImage = require('@@assets/images/avatar.png');

const MultipleImagePicker = ({ value, multiple, onSelectImage, ...rest }) => {
  const [images, setImages] = useState(value || []);

  if (value) {
    useEffect(() => {
      setImages(value);
    }, [value]);
  }

  const onSelectImage2 = async () => {
    const { cancelled, base64 } = await ExpoImagePicker.launchImageLibraryAsync(
      {
        mediaTypes: ExpoImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 0,
        base64: true,
      }
    );

    if (!cancelled) {
      onSelectImage && onSelectImage(base64);
      setImages([...(multiple ? [...images, base64] : [base64])]);
    }
  };

  return multiple ? (
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
              <S.StyledSmallImage
                key={index}
                source={{ uri: `data:image/png;base64,${image}` }}
              />
            ))}
          </TouchableOpacity>
        ) : (
          <NoImageSelected />
        )}
      </ScrollView>
      <Button onPress={onSelectImage2}>
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
  ) : (
    <TouchableOpacity activeOpacity={0.6} onPress={onSelectImage2}>
      <S.StyledMediumImage
        source={
          images.length && images[0]
            ? { uri: `data:image/png;base64,${images[0]}` }
            : defaultImage
        }
        {...rest}
      />
    </TouchableOpacity>
  );
};

MultipleImagePicker.propTypes = {
  value: PropTypes.array,
  onSelectImage: PropTypes.func.isRequired,
  multiple: PropTypes.bool,
};

export default MultipleImagePicker;
