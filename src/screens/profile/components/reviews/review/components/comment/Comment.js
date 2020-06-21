import React from 'react';
import PropTypes from 'prop-types';

import { getComment } from '@@store/modules/reviews/selectors';

import * as S from './styled';

const Comment = ({ review = {} }) => (
  <S.CommentTextContainer>
    <S.CommentText numberOfLines={4} size="XS" family="REGULAR">
      {getComment(review)}
    </S.CommentText>
  </S.CommentTextContainer>
);

Comment.propTypes = {
  review: PropTypes.object.isRequired,
};

export default Comment;
