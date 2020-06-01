import React from 'react';
import { ScrollView } from 'react-native';

import { Spacer } from '@@components';

import Review from './review';

const Reviews = () => (
  <>
    <Spacer height={10} />
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingVertical: 5, alignItems: 'center' }}
    >
      <Review />
      <Review />
      <Review />
    </ScrollView>
  </>
);

export default Reviews;
