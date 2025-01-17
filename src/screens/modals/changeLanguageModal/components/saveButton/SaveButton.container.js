import { compose, withHandlers } from 'recompose';
import { AsyncStorage } from 'react-native';
import I18n from 'i18n-js';
import { connect } from 'react-redux';

import { withCloseModal } from '@@hocs';
import { user, preferences } from '@@store/modules';

import BaseSaveButton from './SaveButton';

const SaveButton = compose(
  withCloseModal,
  connect(null, {
    logout: user.actions.logout,
    changeLanguage: preferences.actions.changeLanguage,
  }),
  withHandlers({
    onSave: ({
      selectedLanguage,
      closeModal,
      logout,
      changeLanguage,
    }) => async () => {
      await AsyncStorage.setItem('@APP:language', selectedLanguage);
      I18n.locale = selectedLanguage;
      changeLanguage({ language: selectedLanguage });
      closeModal();
      logout();
    },
  })
)(BaseSaveButton);

export default SaveButton;
