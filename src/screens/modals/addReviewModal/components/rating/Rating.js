import React from 'react';
import PropTypes from 'prop-types';

import { Rating as BaseRating } from '@@components';

const Rating = props => (
  <BaseRating
    {...{
      name: 'rating',
      error: props.submitting && !props.rating,
      ...props,
    }}
  />
);

Rating.propTypes = {
  submitting: PropTypes.bool.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Rating;
