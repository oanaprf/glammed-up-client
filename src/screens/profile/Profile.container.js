import { compose } from 'recompose';
import { connect } from 'react-redux';
import getOr from 'lodash/fp/getOr';

import { withUseFocusEffect } from '@@hocs';
import { user, reviews, services } from '@@store/modules';

import BaseProfile from './Profile';

const Profile = compose(
  connect(
    (state, { route }) => ({
      userId:
        getOr('', 'params.userId')(route) ||
        user.selectors.getCurrentUserId(state),
    }),
    {
      fetchProfile: user.actions.fetchProfile,
      fetchUserReviews: reviews.actions.fetchUserReviews,
      fetchUserServices: services.actions.fetchUserServices,
    }
  ),
  connect((state, { userId }) => ({
    isOwnProfile: user.selectors.isOwnProfile(state, { userId }),
    user: user.selectors.getProfile(state, { userId }),
    reviews: reviews.selectors.getUserReviews(state, {
      userId,
    }),
    services: services.selectors.getUserServices(state, {
      userId,
    }),
  })),
  withUseFocusEffect(
    ({ userId, fetchProfile, fetchUserReviews, fetchUserServices }) => {
      fetchProfile(userId);
      fetchUserReviews(userId);
      fetchUserServices(userId);
    }
  )
)(BaseProfile);

export default Profile;
