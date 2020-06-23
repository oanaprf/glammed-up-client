import { compose, withHandlers } from 'recompose';
import { AsyncStorage } from 'react-native';
import I18n from 'i18n-js';
import { Updates } from 'expo';

import { withCloseModal } from '@@hocs';

import BaseSaveButton from './SaveButton';

const SaveButton = compose(
  withCloseModal,
  withHandlers({
    onSave: ({ selectedLanguage, closeModal }) => async () => {
      await AsyncStorage.setItem('@APP:language', selectedLanguage);
      I18n.locale = selectedLanguage;
      closeModal();
      Updates.reload();
    },
  })
)(BaseSaveButton);

export default SaveButton;
