/* eslint-disable react/jsx-key */
import React from 'react';

import { Spacer, Text } from '@@components';
import { t } from '@@config';
import {
  ServiceDetailsModal,
  AddServiceModal,
  EditUserModal,
  AddReviewModal,
} from '@@screens/modals';

import { AvatarBar, UserInfoCard, Reviews, UserServices } from './components';
import * as S from './styled';

const Profile = () => (
  <S.Container>
    <S.Header />
    <S.Body>
      <AvatarBar />
      <S.EmptyView />
      <Text size="XL">Oana Profir</Text>
      <Spacer />
      <UserInfoCard />
      <Spacer />
      <S.StyledTabs
        tabLabels={[
          <Text family="BOLD" uppercase>
            {t('profile.services')}
          </Text>,
          <Text family="BOLD" uppercase>
            {t('profile.reviews')}
          </Text>,
        ]}
        tabContents={[<UserServices />, <Reviews />]}
      />
    </S.Body>
    <ServiceDetailsModal />
    <AddServiceModal />
    <EditUserModal />
    <AddReviewModal />
  </S.Container>
);

export default Profile;
