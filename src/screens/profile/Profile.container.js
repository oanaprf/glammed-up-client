import { compose } from 'recompose';
import { connect } from 'react-redux';
import getOr from 'lodash/fp/getOr';

import { withOnMount } from '@@hocs';
import { user, reviews, services } from '@@store/modules';

import BaseProfile from './Profile';

const Profile = compose(
  connect(
    (state, { route }) => ({
      currentUserId: user.selectors.getCurrentUserId(state),
      userId: getOr('', 'params.userId')(route),
    }),
    {
      fetchProfile: user.actions.fetchProfile,
      fetchUserReviews: reviews.actions.fetchUserReviews,
      fetchUserServices: services.actions.fetchUserServices,
    }
  ),
  connect((state, { userId, currentUserId }) => ({
    user: user.selectors.getProfile(state, { userId: userId || currentUserId }),
    reviews: reviews.selectors.getUserReviews(state, {
      userId: userId || currentUserId,
    }),
    services: services.selectors.getUserServices(state, {
      userId: userId || currentUserId,
    }),
  })),
  withOnMount(
    ({
      route,
      currentUserId,
      fetchProfile,
      fetchUserReviews,
      fetchUserServices,
    }) => {
      const userId = getOr('', 'params.userId')(route);
      fetchProfile(userId || currentUserId);
      fetchUserReviews(userId || currentUserId);
      fetchUserServices(userId || currentUserId);
    }
  )
)(BaseProfile);

export default Profile;
