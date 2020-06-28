import React from 'react';
import PropTypes from 'prop-types';

import Star from './star';
import * as S from './styled';

const ratingArray = [1, 2, 3, 4, 5];

const Rating = ({ rating, setRating, error, ...rest }) => (
  <S.RatingContainer error={error}>
    {ratingArray.map(index => (
      <Star key={index} {...{ index, rating, setRating, ...rest }} />
    ))}
  </S.RatingContainer>
);

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  setRating: PropTypes.func.isRequired,
  error: PropTypes.bool,
};

export default Rating;
