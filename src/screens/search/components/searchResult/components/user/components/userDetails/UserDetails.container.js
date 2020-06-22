import { compose, withHandlers, getContext } from 'recompose';
import PropTypes from 'prop-types';

import BaseUserDetails from './UserDetails';

const UserDetails = compose(
  getContext({ navigation: PropTypes.object }),
  withHandlers({
    onProviderNamePress: ({ navigation, user }) => () =>
      navigation.navigate('Profile', { userId: user._id }),
  })
)(BaseUserDetails);

export default UserDetails;
