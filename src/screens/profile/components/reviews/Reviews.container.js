import { compose, branch, renderComponent } from 'recompose';
import { connect } from 'react-redux';

import { BigLoaderIcon } from '@@components';
import { reviews } from '@@store/modules';

import BaseReviews from './Reviews';

const Reviews = compose(
  connect((state, props) => ({
    isLoading: reviews.selectors.areUserReviewsLoading(state, props),
  })),
  branch(({ isLoading }) => isLoading, renderComponent(BigLoaderIcon))
)(BaseReviews);

export default Reviews;
