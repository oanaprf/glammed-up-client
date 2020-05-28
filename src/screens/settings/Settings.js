import React from 'react';

import { t } from '@@config';

import Option from './option';
import * as S from './styled';

const Settings = () => (
  <S.SettingsContainer>
    <S.Header>
      <S.Title>{t('settings.pageName')}</S.Title>
    </S.Header>
    <S.OptionsContainer>
      <S.AppOptions>
        <Option icon="globe" label="changeLanguage" />
        <Option icon="edit-2" label="changeTheme" />
        <Option icon="lock" label="changePassword" />
        <Option icon="info" label="about" />
      </S.AppOptions>
      <S.HorizontalBar />
      <S.Logout>
        <Option icon="power" label="logout" />
      </S.Logout>
    </S.OptionsContainer>
  </S.SettingsContainer>
);

export default Settings;
