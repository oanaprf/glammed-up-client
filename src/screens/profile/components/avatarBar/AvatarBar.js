import React from 'react';

import { EditButton, RatingButton } from './components';
import * as S from './styled';

const avatar = require('@@assets/images/me.png');

const AvatarBar = () => (
  <S.AvatarBar>
    <EditButton />
    <S.ProfilePicture source={avatar} />
    <RatingButton />
  </S.AvatarBar>
);

export default AvatarBar;
