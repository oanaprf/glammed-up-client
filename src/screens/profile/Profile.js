/* eslint-disable react/jsx-key */
import React from 'react';

import { Spacer, Text } from '@@components';
import { t } from '@@config';

import { AvatarBar, UserInfoCard, Reviews, Services } from './components';
import * as S from './styled';

const Profile = () => (
  <S.Container>
    <S.Header />
    <S.Body>
      <AvatarBar />
      <S.EmptyView />
      <S.UserFullname>Oana Profir</S.UserFullname>
      <Spacer />
      <UserInfoCard />
      <Spacer />
      <S.StyledTabs
        tabLabels={[
          <Text>{t('profile.services')}</Text>,
          <Text>{t('profile.reviews')}</Text>,
        ]}
        tabContents={[<Services />, <Reviews />]}
      />
    </S.Body>
  </S.Container>
);

export default Profile;
