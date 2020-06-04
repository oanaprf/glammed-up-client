import React from 'react';

import { Rating as BaseRating } from '@@components';

const Rating = props => (
  <BaseRating
    {...{
      name: 'rating',
      ...props,
    }}
  />
);

export default Rating;
