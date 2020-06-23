/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';

import { Spacer, Text } from '@@components';
import { t } from '@@config';
import {
  ServiceDetailsModal,
  AddServiceModal,
  EditUserModal,
} from '@@screens/modals';
import { GoBackButton } from '@@screens/common';
import { getFullName } from '@@store/modules/user/selectors';

import { AvatarBar, UserInfoCard, Reviews, UserServices } from './components';
import * as S from './styled';

const Profile = ({
  user = {},
  reviews = [],
  services = [],
  route,
  navigation,
  isOwnProfile,
}) => (
  <S.Container>
    <S.Header>
      {getOr('', 'params.userId')(route) ? (
        <GoBackButton navigation={navigation} label={t('search.pageName')} />
      ) : null}
    </S.Header>
    <S.Body>
      <AvatarBar {...{ user, isOwnProfile }} />
      <S.EmptyView />
      <Text size="XL">{getFullName(user)}</Text>
      <Spacer height={10} />
      <UserInfoCard user={user} />
      <Spacer height={10} />
      <S.StyledTabs
        tabLabels={[
          ...(user.isProvider
            ? [
                <Text family="BOLD" uppercase>
                  {t('profile.services')}
                </Text>,
              ]
            : []),
          <Text family="BOLD" uppercase>
            {t('profile.reviews')}
          </Text>,
        ]}
        tabContents={[
          ...(user.isProvider
            ? [<UserServices {...{ user, services, isOwnProfile }} />]
            : []),
          <Reviews reviews={reviews} />,
        ]}
      />
    </S.Body>
    <ServiceDetailsModal />
    <AddServiceModal />
    <EditUserModal />
  </S.Container>
);

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  reviews: PropTypes.array,
  services: PropTypes.array,
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
  isOwnProfile: PropTypes.bool.isRequired,
};

export default Profile;
