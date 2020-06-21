import { compose } from 'recompose';
import { connect } from 'react-redux';

import { withOnMount } from '@@hocs';
import { user, reviews, services } from '@@store/modules';

import BaseProfile from './Profile';

const Profile = compose(
  connect(
    state => ({
      currentUserId: user.selectors.getCurrentUserId(state),
      user: user.selectors.getProfile(state),
      reviews: reviews.selectors.getUserReviews(state),
      services: services.selectors.getUserServices(state),
    }),
    {
      fetchProfile: user.actions.fetchProfile,
      fetchUserReviews: reviews.actions.fetchUserReviews,
      fetchUserServices: services.actions.fetchUserServices,
    }
  ),
  withOnMount(
    ({
      // eslint-disable-next-line no-shadow
      user,
      currentUserId,
      fetchProfile,
      fetchUserReviews,
      fetchUserServices,
    }) => {
      fetchProfile(currentUserId);
      fetchUserReviews(currentUserId);
      user.isProvider && fetchUserServices(currentUserId);
    }
  )
)(BaseProfile);

export default Profile;
