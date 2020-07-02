import { compose, branch, renderComponent, withProps } from 'recompose';
import { connect } from 'react-redux';

import { BigLoaderIcon, NoResults } from '@@components';
import { reviews } from '@@store/modules';
import { t } from '@@config';

import BaseReviews from './Reviews';

const Reviews = compose(
  connect((state, props) => ({
    isLoading: reviews.selectors.areUserReviewsLoading(state, props),
  })),
  withProps({ message: t('profile.noReviews') }),
  branch(
    ({ isLoading }) => isLoading,
    renderComponent(BigLoaderIcon),
    branch(
      // eslint-disable-next-line no-shadow
      ({ reviews = [] }) => !reviews.length,
      renderComponent(NoResults)
    )
  )
)(BaseReviews);

export default Reviews;
