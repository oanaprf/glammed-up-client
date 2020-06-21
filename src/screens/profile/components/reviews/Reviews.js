import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import { Spacer } from '@@components';

import Review from './review';

const Reviews = ({ reviews = [] }) => (
  <>
    <Spacer height={10} />
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingVertical: 5, alignItems: 'center' }}
    >
      {reviews.map(review => (
        <Review key={review._id} isUserService review={review} />
      ))}
    </ScrollView>
  </>
);

Reviews.propTypes = {
  reviews: PropTypes.array,
};

export default Reviews;
