import React from 'react';
import PropTypes from 'prop-types';

import { getProfilePicture } from '@@store/modules/user/selectors';
import { EditButton, RatingButton } from './components';
import * as S from './styled';

const AvatarBar = ({ user }) => (
  <S.AvatarBar>
    <EditButton />
    <S.ProfilePicture source={getProfilePicture(user)} />
    <RatingButton />
  </S.AvatarBar>
);

AvatarBar.propTypes = {
  user: PropTypes.object.isRequired,
};

export default AvatarBar;
