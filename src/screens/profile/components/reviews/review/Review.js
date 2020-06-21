import React from 'react';
import PropTypes from 'prop-types';

import { Spacer } from '@@components';
import { getFirstPicture } from '@@store/modules/services/selectors';

import { ServiceInfo, Comment } from './components';
import * as S from './styled';

const Review = ({ review = {} }) => (
  <S.CardContainer>
    <S.ReviewInfo>
      <Spacer height={10} />
      <ServiceInfo review={review} />
      <Comment review={review} />
    </S.ReviewInfo>
    <S.ServicePicture source={getFirstPicture(review.service)} />
  </S.CardContainer>
);

Review.propTypes = {
  review: PropTypes.object.isRequired,
};

export default Review;
