import { compose, withHandlers } from 'recompose';
import { AsyncStorage } from 'react-native';
import I18n from 'i18n-js';
import { connect } from 'react-redux';

import { withCloseModal } from '@@hocs';
import { user } from '@@store/modules';

import BaseSaveButton from './SaveButton';

const SaveButton = compose(
  withCloseModal,
  connect(null, {
    logout: user.actions.logout,
  }),
  withHandlers({
    onSave: ({ selectedLanguage, closeModal, logout }) => async () => {
      await AsyncStorage.setItem('@APP:language', selectedLanguage);
      I18n.locale = selectedLanguage;
      closeModal();
      logout();
    },
  })
)(BaseSaveButton);

export default SaveButton;
