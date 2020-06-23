import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

import * as S from './styled';

const defaultImage = require('@@assets/images/avatar.png');

const SingleImagePicker = ({ images, onSelectImage, ...rest }) => (
  <TouchableOpacity activeOpacity={0.6} onPress={onSelectImage}>
    <S.StyledMediumImage
      source={images.length && images[0] ? { uri: images[0] } : defaultImage}
      {...rest}
    />
  </TouchableOpacity>
);

SingleImagePicker.propTypes = {
  images: PropTypes.array.isRequired,
  onSelectImage: PropTypes.func.isRequired,
};

export default SingleImagePicker;
