import React from 'react';
import PropTypes from 'prop-types';

import { t } from '@@config';

import { Option, GoBackButton } from './components';
import * as S from './styled';

const Settings = ({ navigation }) => (
  <S.Container>
    <S.Header>
      <GoBackButton navigation={navigation} />
      <S.Title>{t('settings.pageName')}</S.Title>
    </S.Header>
    <S.Body>
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
    </S.Body>
  </S.Container>
);

Settings.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Settings;
