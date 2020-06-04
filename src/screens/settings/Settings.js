import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { t } from '@@config';
import { withOpenModal } from '@@hocs';
import * as C from '@@utils/constants';
import { BecomeProviderModal } from '@@screens/modals';

import { Option, GoBackButton } from './components';
import * as S from './styled';

const Settings = ({ navigation, openModal }) => (
  <S.Container>
    <S.Header>
      <GoBackButton navigation={navigation} />
      <S.Title size="XL" family="REGULAR">
        {t('settings.pageName')}
      </S.Title>
    </S.Header>
    <S.Body>
      <View>
        <Option
          icon="award"
          label="becomeProvider"
          onPress={() => openModal({ name: C.MODALS.BECOME_PROVIDER })}
        />
        <Option icon="globe" label="changeLanguage" />
        <Option icon="edit-2" label="changeTheme" />
        <Option icon="lock" label="changePassword" />
        <Option icon="help-circle" label="help" />
        <Option icon="power" label="logout" />
      </View>
    </S.Body>
    <BecomeProviderModal />
  </S.Container>
);

Settings.propTypes = {
  navigation: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default withOpenModal(Settings);
