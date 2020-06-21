import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';

import { UserDetails, UserServices } from './components';
import * as S from './styled';

const defaultProfilePicture = require('@@assets/images/avatar.png');

const User = ({ user }) => (
  <S.CardContainer>
    <S.RowContainer>
      <S.UserProfilePicture
        source={getOr(defaultProfilePicture, 'profilePicture', user)}
      />
      <UserDetails user={user} />
    </S.RowContainer>
    <UserServices user={user} />
  </S.CardContainer>
);

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
