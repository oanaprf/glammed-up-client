import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Star from './star';

const ratingArray = [1, 2, 3, 4, 5];

const Rating = ({ rating, setRating }) => (
  <View style={{ flexDirection: 'row' }}>
    {ratingArray.map(index => (
      <Star key={index} {...{ index, rating, setRating }} />
    ))}
  </View>
);

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  setRating: PropTypes.func.isRequired,
};

export default Rating;
