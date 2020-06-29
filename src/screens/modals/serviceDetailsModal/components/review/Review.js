import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

import { Text } from '@@components';
import {
  getClientFullName,
  getComment,
  getRating,
} from '@@store/modules/reviews/selectors';
import { theme } from '@@config';

import * as S from './styled';

const Review = ({ review = {} }) => (
  <S.CardContainer>
    <S.ReviewInfo>
      <S.RowContainer>
        <Text>{getClientFullName(review)}</Text>
        <S.RatingContainer>
          <S.TextWithPadding family="BOLD">{`${getRating(
            review
          )}`}</S.TextWithPadding>
          <Icon
            {...{
              name: 'star',
              type: 'antdesign',
              size: 18,
              color: theme.colors.warning,
            }}
          />
        </S.RatingContainer>
      </S.RowContainer>
      {getComment(review) ? (
        <S.CommentTextContainer>
          <S.CommentText numberOfLines={2} size="XS" family="REGULAR">
            {getComment(review)}
          </S.CommentText>
        </S.CommentTextContainer>
      ) : null}
    </S.ReviewInfo>
  </S.CardContainer>
);

Review.propTypes = {
  review: PropTypes.object.isRequired,
};

export default Review;
