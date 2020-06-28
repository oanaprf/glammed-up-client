import React from 'react';
import PropTypes from 'prop-types';

import { getProfilePicture } from '@@store/modules/user/selectors';
import { UserDetails, UserServices } from './components';
import * as S from './styled';

const User = ({ user }) => (
  <S.CardContainer>
    <S.RowContainer>
      <S.UserProfilePicture source={{ uri: getProfilePicture(user) }} />
      <UserDetails user={user} />
    </S.RowContainer>
    <UserServices user={user} />
  </S.CardContainer>
);

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
