import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { t } from '@@config';
import { withOpenModal } from '@@hocs';
import * as C from '@@utils/constants';
import { BecomeProviderModal, EditCredentialsModal } from '@@screens/modals';
import { Spacer } from '@@components';

import { Option, GoBackButton, Credentials } from './components';
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
        <Spacer height={40} />
        <Credentials
          onPress={() => openModal({ name: C.MODALS.EDIT_CREDENTIALS_MODAL })}
        />
        <Spacer height={40} />
        <Option
          icon="award"
          label="becomeProvider"
          onPress={() => openModal({ name: C.MODALS.BECOME_PROVIDER })}
        />
        <Spacer height={30} />
        <Option icon="globe" label="changeLanguage" />
        <Spacer height={30} />
        <Option icon="edit-2" label="changeTheme" />
        <Spacer height={30} />
        <Option icon="help-circle" label="help" />
        <Spacer height={30} />
        <Option icon="power" label="logout" />
      </View>
    </S.Body>
    <BecomeProviderModal />
    <EditCredentialsModal />
  </S.Container>
);

Settings.propTypes = {
  navigation: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default withOpenModal(Settings);
