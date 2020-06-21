/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';

import { Spacer, Text } from '@@components';
import { t } from '@@config';
import {
  ServiceDetailsModal,
  AddServiceModal,
  EditUserModal,
  AddReviewModal,
} from '@@screens/modals';
import { getFullName } from '@@store/modules/user/selectors';

import { AvatarBar, UserInfoCard, Reviews, UserServices } from './components';
import * as S from './styled';

const Profile = ({ user = {}, reviews = [], services = [] }) => (
  <S.Container>
    <S.Header />
    <S.Body>
      <AvatarBar user={user} />
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
          ...(user.isProvider ? [<UserServices services={services} />] : []),
          <Reviews reviews={reviews} />,
        ]}
      />
    </S.Body>
    <ServiceDetailsModal />
    <AddServiceModal />
    <EditUserModal />
    <AddReviewModal />
  </S.Container>
);

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  reviews: PropTypes.array,
  services: PropTypes.array,
};

export default Profile;
