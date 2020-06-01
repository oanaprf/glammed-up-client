import React from 'react';

import { UserServices } from '@@screens/common';

import { UserDetails } from './components';
import * as S from './styled';

const userProfilePicture = require('@@assets/images/me.png');

const User = () => (
  <S.CardContainer>
    <S.RowContainer>
      <S.UserProfilePicture source={userProfilePicture} />
      <UserDetails />
    </S.RowContainer>
    <UserServices />
  </S.CardContainer>
);

export default User;
