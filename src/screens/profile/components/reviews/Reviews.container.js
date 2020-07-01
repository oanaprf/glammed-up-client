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
  branch(
    ({ isLoading }) => isLoading,
    renderComponent(BigLoaderIcon),
    branch(
      // eslint-disable-next-line no-shadow
      ({ reviews = [] }) => !reviews.length,
      renderComponent(withProps({ message: t('profile.noReviews') })(NoResults))
    )
  )
)(BaseReviews);

export default Reviews;
